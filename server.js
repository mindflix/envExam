import express from "express";
import { ChatGPTAPI } from "chatgpt";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 3000;
const apiChat = new ChatGPTAPI({
    apiKey: "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",
});

app.use(cors()).use(bodyParser.json());

app.post("/api", async (req, res) => {
  const questions = req.body.questions;
  const answers = req.body.answers;
  const answersFound = [];

  for (let i = 0; i < questions.length; i++) {
    const resChat = await apiChat.sendMessage(questions[i] + "\n" + answers[i]);
    answersFound.push(resChat.text);
  }

  res.send(JSON.stringify(answersFound));
});

app.listen(port, () => console.log(`Server starts listening on port ${port}`));
