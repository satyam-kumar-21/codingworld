"use client";

import Link from "next/link";
import { useState } from "react";

type User = { name: string; email: string; role: "student" | "admin" };

const courses = [
  ["Next.js Complete Course", "Authentication & Security", 72, "28 of 39 lessons"],
  ["JavaScript Complete Course", "Async JavaScript", 58, "24 of 42 lessons"],
];

const materials = [
  ["N", "Frontend Interview Notes", "Notes - Available to read", "/notes"],
  ["P", "Portfolio Builder", "Project files - Included with your learning", "/projects"],
  ["R", "Web Development Roadmap", "Roadmap - Free access", "/roadmaps"],
];

export function ProfileView({ user, initialTab = "profile" }: { user: User; initialTab?: "profile" | "learning" }) {
  const [tab, setTab] = useState<"profile" | "learning">(initialTab);
  const initials = user.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase();

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
        <aside className="h-fit rounded-3xl border border-cyan-300/15 bg-slate-950/55 p-5">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-5"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300 text-sm font-black text-slate-950">{initials}</div><div className="min-w-0"><div className="truncate font-bold text-white">{user.name}</div><div className="truncate text-xs text-slate-500">{user.email}</div></div></div>
          <nav className="mt-4 space-y-1" aria-label="Profile navigation">
            <button type="button" onClick={() => setTab("profile")} className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold ${tab === "profile" ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300"}`}>Profile</button>
            <button type="button" onClick={() => setTab("learning")} className={`block w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold ${tab === "learning" ? "bg-cyan-300 text-slate-950" : "text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300"}`}>My learning</button>
            <Link href="/courses" className="block rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300">Browse courses</Link>
          </nav>
          <form action="/api/auth/logout" method="post" className="mt-5 border-t border-slate-800 pt-4"><button className="w-full rounded-xl border border-rose-400/20 px-3 py-2.5 text-left text-sm text-rose-300 hover:bg-rose-400/10">Log out</button></form>
        </aside>

        <section className="space-y-6">
          {tab === "profile" ? (
            <>
              <div className="hero-panel rounded-3xl p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">My profile</p><div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><h1 className="text-3xl font-black tracking-tight text-white">Welcome, {user.name.split(" ")[0]}.</h1><p className="mt-2 text-sm text-slate-400">Your account, courses, and materials in one place.</p></div><button type="button" onClick={() => setTab("learning")} className="premium-btn rounded-full px-5 py-3 text-center text-sm font-semibold text-slate-950">View my learning</button></div></div>
              <div className="rounded-3xl border border-cyan-300/15 bg-slate-950/55 p-6 sm:p-7"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Account details</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-4"><div className="text-xs text-slate-500">Full name</div><div className="mt-2 font-semibold text-white">{user.name}</div></div><div className="rounded-2xl border border-slate-800 bg-slate-900/55 p-4"><div className="text-xs text-slate-500">Email address</div><div className="mt-2 font-semibold text-white">{user.email}</div></div></div></div>
            </>
          ) : (
            <>
              <div className="hero-panel rounded-3xl p-6 sm:p-8"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">My learning</p><div className="mt-3 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><h1 className="text-3xl font-black tracking-tight text-white">Keep learning, {user.name.split(" ")[0]}.</h1><p className="mt-2 text-sm text-slate-400">Continue your courses without leaving your profile.</p></div><Link href="/courses" className="premium-btn rounded-full px-5 py-3 text-center text-sm font-semibold text-slate-950">Browse courses</Link></div></div>
              <div className="rounded-3xl border border-cyan-300/15 bg-slate-950/55 p-6 sm:p-7"><div className="flex items-center justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Keep learning</p><h2 className="mt-2 text-2xl font-black text-white">Enrolled courses</h2></div><button type="button" onClick={() => setTab("profile")} className="text-sm font-semibold text-cyan-300">Back to profile</button></div><div className="mt-6 space-y-4">{courses.map(([title, lesson, progress, count]) => <article key={title} className="rounded-2xl border border-slate-800 bg-slate-900/55 p-4"><div className="flex items-center justify-between gap-3"><div><h3 className="font-bold text-white">{title}</h3><p className="mt-1 text-sm text-slate-400">Next: {lesson}</p></div><span className="text-sm font-bold text-cyan-300">{progress}%</span></div><div className="mt-4 h-2 rounded-full bg-slate-800"><div className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${progress}%` }} /></div><div className="mt-2 text-xs text-slate-500">{count}</div></article>)}</div></div>
              <div className="rounded-3xl border border-cyan-300/15 bg-slate-950/55 p-6 sm:p-7"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Your library</p><h2 className="mt-2 text-2xl font-black text-white">Courses & materials</h2><div className="mt-5 grid gap-3">{materials.map(([letter, title, detail, href]) => <Link href={href} key={title} className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/55 p-4 hover:border-cyan-300/35"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 font-mono text-sm font-bold text-cyan-300">{letter}</div><div className="min-w-0 flex-1"><div className="text-sm font-bold text-white">{title}</div><div className="mt-1 text-xs text-slate-400">{detail}</div></div><span className="text-xs font-semibold text-cyan-300">Open</span></Link>)}</div></div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
