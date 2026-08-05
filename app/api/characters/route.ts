import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("characters")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const body = await req.json();

  const { data, error } = await supabase
    .from("characters")
    .insert([
      {
        project_id: body.projectId,
        name: body.name,
        age: body.age,
        role: body.role,
        personality: body.personality,
        biography: body.biography,
      },
    ])
    .select()
    .single();

  if (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json(data);
}