import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ collections: ["courses", "lessons", "notes", "resources", "projects", "roadmaps", "interview-questions", "blog", "orders", "certificates"] });
}

export async function POST(request: Request) {
  const body = (await request.json()) as { type?: string; title?: string };
  if (!body.type || !body.title) {
    return NextResponse.json({ error: "Content type and title are required." }, { status: 400 });
  }

  return NextResponse.json({ item: { id: `content_${Date.now()}`, ...body, status: "draft" }, message: "Draft created. Connect persistence and file storage before production." }, { status: 201 });
}
