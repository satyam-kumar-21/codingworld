import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; email?: string; password?: string; confirmPassword?: string };
  if (!body.name || !body.email || !body.password || body.password.length < 8 || body.password !== body.confirmPassword) {
    return NextResponse.json({ error: "Name, email, and a password of 8+ characters are required." }, { status: 400 });
  }

  return NextResponse.json({
    user: { id: `usr_${Date.now()}`, name: body.name, email: body.email, role: "student" },
    message: "Account created. Email verification is ready for your mail provider integration.",
  }, { status: 201 });
}
