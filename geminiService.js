import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function chatWithGemini(messages) {
  try {
    const result = await model.generateContent({ contents: messages });
    return result.response.text();
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Error from Gemini: " + err.message;
  }
}