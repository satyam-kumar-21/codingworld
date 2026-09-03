import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { env } from "@/lib/env";
import { db } from "@/lib/db";

export const SESSION_COOKIE = "coding-world-session";
const secret = new TextEncoder().encode(env.sessionSecret);

type SessionUser = { id: string; name: string; email: string; role: "student" | "admin" };

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, passwordHash: string) {
  return bcrypt.compare(password, passwordHash);
}

export async function createSession(user: SessionUser) {
  const expiresAt = new Date(Date.now() + env.sessionTtlDays * 24 * 60 * 60 * 1000);
  const token = await new SignJWT({ sub: user.id, role: user.role, name: user.name, email: user.email })
    .setProtectedHeader({ alg: "HS256" }).setIssuedAt().setExpirationTime(expiresAt).sign(secret);
  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", expires: expiresAt, path: " /".trim() });
}

export async function getSessionUser(): Promise<SessionUser | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    if (typeof payload.sub !== "string" || (payload.role !== "student" && payload.role !== "admin")) return null;
    return { id: payload.sub, name: String(payload.name ?? "Student"), email: String(payload.email ?? ""), role: payload.role };
  } catch {
    return null;
  }
}

export async function requireUser(role?: SessionUser["role"]) {
  const user = await getSessionUser();
  if (!user || (role && user.role !== role)) return null;
  return user;
}

export async function clearSession() {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function findUserByEmail(email: string) {
  if (!env.databaseUrl) return null;
  return db.user.findUnique({ where: { email: email.toLowerCase() } });
}
