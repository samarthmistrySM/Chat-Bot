const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const engineId = "stable-diffusion-v1-6";
const apiHost = process.env.API_HOST || "https://api.stability.ai";
const apiKey = process.env.STABILITY_API_KEY;

const app = express();
const PORT = process.env.PORT;

if (!apiKey) {
  throw new Error("Missing Stability API key.");
}

cloudinary.config({
  cloud_name: "pinorama",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_APIKEY);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function genPrompt(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);

  const response = await result.response;

  const text = response.text();
  console.log(text);
  return text;
}

async function uploadOnCloud(imagePath) {
  try {
    const result = await cloudinary.uploader.upload(imagePath);
    return result.secure_url;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}

async function genImage(prompt) {
  try {
    const response = await fetch(
      `${apiHost}/v1/generation/${engineId}/text-to-image`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: prompt,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Non-200 response: ${await response.text()}`);
    }

    const responseJSON = await response.json();
    const imagePath = "./out/v1_txt2img_0.png";

    fs.writeFileSync(
      imagePath,
      Buffer.from(responseJSON.artifacts[0].base64, "base64")
    );

    const imgUrl = await uploadOnCloud(imagePath);
    return imgUrl;
  } catch (error) {
    console.error("Error generating or uploading image:", error);
  }
}

app.post("/image", (req, res) => {
    genImage(req.body.prompt)
    .then((imgUrl)=>{
        console.log(imgUrl);
        res.send(imgUrl);
    })
    .catch((err)=>{
        res.send(err)
    })
});

app.post("/text", (req, res) => {
  genPrompt(req.body.prompt)
    .then((text) => {
      console.log(text);
      res.send(text);
    })
    .catch((err) => {
      res.send(err);
    });

});

app.listen(PORT, () => {
  console.log("server started at " + PORT);
});
