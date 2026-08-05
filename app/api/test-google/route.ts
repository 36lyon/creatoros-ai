import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export async function GET() {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GOOGLE_API_KEY!,
    });

    const response = await ai.models.generateContent({
  model: "gemini-3.5-flash",
      contents: "Reply with only the word: SUCCESS",
    });

    return NextResponse.json({
      success: true,
      text: response.text,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}