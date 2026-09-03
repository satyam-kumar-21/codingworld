import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };
  if (!body.email || !body.password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  return NextResponse.json({
    user: { id: "usr_demo", name: "Riya Sharma", email: body.email, role: body.email.includes("admin") ? "admin" : "student" },
    session: { token: `demo_${Date.now()}`, expiresIn: "7d" },
  });
}
