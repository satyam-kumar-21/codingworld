import { NextResponse } from "next/server";
import { createSession, findUserByEmail, verifyPassword } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };
  if (!body.email || !body.password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  try {
    const user = await findUserByEmail(body.email.trim().toLowerCase());
    if (!user || !(await verifyPassword(body.password, user.passwordHash))) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }
    const sessionUser = { id: String(user._id), name: user.name, email: user.email, role: user.role };
    await createSession(sessionUser);
    return NextResponse.json({ user: sessionUser });
  } catch {
    return NextResponse.json({ error: "MongoDB is unavailable. Start your local MongoDB server and try again." }, { status: 503 });
  }
}
