import { NextResponse } from "next/server";
import { z } from "zod";
import { courseInputSchema, deleteCourseRecord, getCourses, updateCourseRecord } from "@/lib/admin-data";

const updateSchema = courseInputSchema.partial();

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const items = await getCourses();
  const item = items.find((course) => course.id === id);

  if (!item) {
    return NextResponse.json({ error: "Course not found." }, { status: 404 });
  }

  return NextResponse.json({ item });
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const parsed = updateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Validation failed." }, { status: 400 });
    }

    const record = await updateCourseRecord(id, parsed.data);
    if (!record) {
      return NextResponse.json({ error: "Course not found." }, { status: 404 });
    }

    return NextResponse.json({ course: record, message: "Course updated successfully." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to update course." }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const deleted = await deleteCourseRecord(id);
    if (!deleted) {
      return NextResponse.json({ error: "Course not found." }, { status: 404 });
    }
    return NextResponse.json({ message: "Course deleted successfully." });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed to delete course." }, { status: 500 });
  }
}
