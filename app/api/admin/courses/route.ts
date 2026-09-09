import { NextResponse } from "next/server";
import { z } from "zod";
import { courseInputSchema, createCourseRecord, getCourses } from "@/lib/admin-data";

export async function GET() {
  const items = await getCourses();
  return NextResponse.json({ items });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = courseInputSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Validation failed." }, { status: 400 });
    }

    const course = await createCourseRecord(parsed.data);
    return NextResponse.json({ course, message: "Course created successfully." }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to create course." }, { status: 500 });
  }
}
