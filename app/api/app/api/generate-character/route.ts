import { NextResponse } from "next/server";
import { generateImage } from "@/app/lib/ai/image";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.description) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing description.",
        },
        { status: 400 }
      );
    }

    const image = await generateImage(body.description);

    return NextResponse.json({
      success: true,
      image,
    });
  } catch (error: any) {
    console.error("Generate Image Error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}