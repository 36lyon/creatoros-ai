import { GoogleGenAI } from "@google/genai";

if (!process.env.GOOGLE_API_KEY) {
  throw new Error("Missing GOOGLE_API_KEY");
}

export const googleAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

export async function generateText(prompt: string): Promise<string> {
  const MAX_RETRIES = 3;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await googleAI.models.generateContent({
    model: "gemini-3-flash-preview",
        contents: prompt,
      });

      return response.text ?? "";
    } catch (error: any) {
      console.log(`Google AI attempt ${attempt} failed.`);

      if (attempt === MAX_RETRIES) {
        throw error;
      }

      // Wait 2 seconds before retrying
      await new Promise((resolve) => setTimeout(resolve, 2000));
    }
  }

  throw new Error("Google AI failed after multiple attempts.");
}