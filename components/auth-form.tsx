"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    const response = await fetch(`/api/auth/${mode}`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const data = await response.json();
    setLoading(false);
    if (!response.ok) {
      setMessage(data.error ?? "Something went wrong.");
      return;
    }
    localStorage.setItem("coding-world-user", JSON.stringify(data.user));
    router.push(data.user.role === "admin" ? "/admin" : "/dashboard");
  }

  return (
    <form onSubmit={submit} className="mt-8 space-y-5">
      {mode === "register" ? <div><label className="mb-2 block text-sm font-medium text-slate-700">Full name</label><input name="name" required placeholder="Aarav Sharma" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:bg-white" /></div> : null}
      <div><label className="mb-2 block text-sm font-medium text-slate-700">Email address</label><input name="email" required type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:bg-white" /></div>
      <div><label className="mb-2 block text-sm font-medium text-slate-700">Password</label><input name="password" required minLength={8} type="password" placeholder="At least 8 characters" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:bg-white" /></div>
      {mode === "register" ? <div><label className="mb-2 block text-sm font-medium text-slate-700">Confirm password</label><input name="confirmPassword" required minLength={8} type="password" placeholder="Confirm your password" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:bg-white" /></div> : <div className="flex items-center justify-between text-sm"><label className="flex items-center gap-2 text-slate-600"><input type="checkbox" /> Remember me</label><a href="/forgot-password" className="text-brand hover:underline">Forgot password?</a></div>}
      {message ? <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{message}</p> : null}
      <button disabled={loading} className="w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-wait disabled:opacity-60">{loading ? "Working..." : mode === "login" ? "Login" : "Create Account"}</button>
    </form>
  );
}
