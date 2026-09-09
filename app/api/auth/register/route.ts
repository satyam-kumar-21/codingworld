import { NextResponse } from "next/server";
import { getMongoDb } from "@/lib/db";
import { createSession, hashPassword, findUserByEmail } from "@/lib/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as { name?: string; email?: string; password?: string; confirmPassword?: string };
  const email = body.email?.trim().toLowerCase();
  if (!body.name?.trim() || !email || !body.password || body.password.length < 8 || body.password !== body.confirmPassword) {
    return NextResponse.json({ error: "Name, email, and a password of 8+ characters are required." }, { status: 400 });
  }

  try {
    if (await findUserByEmail(email)) return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    const now = new Date();
    const user = { name: body.name.trim(), email, passwordHash: await hashPassword(body.password), role: "student" as const, createdAt: now, updatedAt: now };
    const database = await getMongoDb();
    const result = await database.collection("users").insertOne(user);
    const sessionUser = { id: result.insertedId.toString(), name: user.name, email: user.email, role: user.role };
    await createSession(sessionUser);
    return NextResponse.json({ user: sessionUser, message: "Account created." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "MongoDB is unavailable. Start your local MongoDB server and try again." }, { status: 503 });
  }
}
