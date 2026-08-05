import { NextResponse } from "next/server";
import { generateText } from "@/app/lib/ai/text";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const prompt = `
You are a professional Hollywood character designer.

Based on the story below, generate ONE main character.

Return ONLY valid JSON.

Do NOT include markdown.

Do NOT use triple backticks.

Return exactly this structure:

{
  "name": "",
  "age": "",
  "occupation": "",
  "personality": "",
  "goals": "",
  "weaknesses": "",
  "relationships": "",
  "backstory": "",
  "appearance": "",
  "imagePrompt": ""
}

Story:

${body.story}
`;
const text = await generateText(prompt);

    console.log(text);

    return NextResponse.json({
      success: true,
      text,
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