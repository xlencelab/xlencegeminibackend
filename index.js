import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { chatWithGemini } from "./geminiService.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.post("/api/gemini", async (req, res) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages format." });
  }

  const response = await chatWithGemini(messages);
  res.json({ response });
});

app.get("/", (_, res) => res.send("Gemini Proxy API is running"));
app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));