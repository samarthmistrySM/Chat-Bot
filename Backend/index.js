const { GoogleGenerativeAI } = require ("@google/generative-ai");


require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_APIKEY);

async function genPrompt(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    // const prompt = "combination of color blue and yellow"

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    return text;
}


genPrompt("draw minecraft character ")
    .then(text => {
        console.log(text);
    })
    .catch(err => {
        console.error("Error:", err);
    });