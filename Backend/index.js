const express = require('express');
const cors = require('cors')
require('dotenv').config();
const { GoogleGenerativeAI } = require ("@google/generative-ai");

const app = express();
const PORT = process.env.PORT;

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_APIKEY);

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function genPrompt(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"});

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();
    console.log(text);
    return text;
}

app.post('/text',(req,res)=>{

    genPrompt(req.body.prompt)
    .then(text => {
        console.log(text);
        res.send(text);
    })
    .catch(err => {
        res.send(err);
    });
    // res.send("suc");
})

app.listen(PORT, ()=>{
    console.log("server started at " + PORT);
})