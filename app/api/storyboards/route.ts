import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const storyboards = await prisma.storyboard.findMany({
      orderBy: {
        sceneNumber: "asc",
      },
    });

    return NextResponse.json(storyboards);
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const scenes = Array.isArray(body)
      ? body
      : Array.isArray(body.scenes)
      ? body.scenes
      : [body];

    const savedScenes = [];

    for (const scene of scenes) {
      const storyboard = await prisma.storyboard.create({
        data: {
          projectId: Number(scene.projectId),

          sceneNumber: Number(scene.sceneNumber),

          title: scene.title || "",

          description: scene.description || "",

          cameraShot: scene.cameraShot || "",

          location: scene.location || "",

          lighting: scene.lighting || "",

          imagePrompt: scene.imagePrompt || "",

          videoPrompt: scene.videoPrompt || "",
        },
      });

      savedScenes.push(storyboard);
    }

    return NextResponse.json({
      success: true,
      scenes: savedScenes,
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