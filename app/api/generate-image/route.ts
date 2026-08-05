import { NextResponse } from "next/server";
import { generateImage } from "@/app/lib/ai/image";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const image = await generateImage(body.description);

    return NextResponse.json({
      success: true,
      image,
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