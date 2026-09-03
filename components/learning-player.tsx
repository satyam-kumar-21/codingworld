"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const sections = [
  { title: "Section 1: Getting started", lessons: [{ title: "Welcome to the course", duration: "04:12", complete: true }, { title: "How to use this course", duration: "06:48", complete: true }, { title: "Set up your workspace", duration: "09:20", complete: false }] },
  { title: "Section 2: React foundations", lessons: [{ title: "Introduction to React", duration: "12:16", complete: false }, { title: "State and props", duration: "18:42", complete: false }, { title: "Forms and validation", duration: "27:08", complete: false }, { title: "Hooks and effects", duration: "34:10", complete: false }] },
  { title: "Section 3: Build the project", lessons: [{ title: "Plan the application", duration: "14:32", complete: false }, { title: "Build the dashboard", duration: "31:05", complete: false }] },
];

const flatLessons = sections.flatMap((section) => section.lessons);

export default function LearningPlayer() {
  const [activeIndex, setActiveIndex] = useState(3);
  const [completed, setCompleted] = useState(() => new Set(flatLessons.filter((lesson) => lesson.complete).map((lesson) => lesson.title)));
  const [tab, setTab] = useState("Overview");
  const activeLesson = flatLessons[activeIndex];
  const progress = Math.round((completed.size / flatLessons.length) * 100);

  useEffect(() => {
    const player = document.querySelector(".min-h-screen > main > section > div > div") as HTMLElement | null;
    if (!player) return;

    const fullscreenButton = document.createElement("button");
    fullscreenButton.type = "button";
    fullscreenButton.className = "learning-fullscreen-button";
    fullscreenButton.setAttribute("aria-label", "Enter fullscreen");
    fullscreenButton.title = "Enter fullscreen";
    fullscreenButton.textContent = "⛶";
    fullscreenButton.addEventListener("click", async () => {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await player.requestFullscreen();
    });
    player.append(fullscreenButton);

    const syncFullscreenState = () => {
      const active = document.fullscreenElement === player;
      fullscreenButton.textContent = active ? "⤢" : "⛶";
      fullscreenButton.setAttribute("aria-label", active ? "Exit fullscreen" : "Enter fullscreen");
      fullscreenButton.title = active ? "Exit fullscreen" : "Enter fullscreen";
    };
    document.addEventListener("fullscreenchange", syncFullscreenState);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
      fullscreenButton.remove();
    };
  }, []);

  function toggleComplete() {
    setCompleted((current) => { const next = new Set(current); if (next.has(activeLesson.title)) next.delete(activeLesson.title); else next.add(activeLesson.title); return next; });
  }

  return (
    <div className="min-h-screen bg-[#111827] text-white">
    <header className="flex min-h-16 items-center justify-between gap-4 border-b border-white/10 bg-[#101318] px-4 py-3 lg:px-8"><div className="flex min-w-0 items-center gap-4"><Link href="/dashboard" className="text-xl font-black tracking-[-0.06em] text-white">Coding World</Link><span className="hidden h-6 w-px bg-white/20 sm:block" /><span className="hidden truncate text-sm text-slate-300 sm:block">React.js Complete Course</span></div><div className="flex items-center gap-4 text-sm"><span className="hidden text-slate-400 md:inline">{progress}% complete</span><Link href="/dashboard" className="rounded-md border border-white/20 px-3 py-2 font-semibold text-slate-200 transition hover:border-white/50 hover:text-white">Exit course</Link></div></header>
    <main className="mx-auto grid max-w-[1540px] lg:grid-cols-[minmax(0,1fr)_370px]"><section className="min-w-0 bg-[#111827]"><div className="mx-auto max-w-5xl px-4 pb-10 pt-5 sm:px-8 lg:px-12 lg:pt-8"><div className="relative aspect-video overflow-hidden bg-[#05070b] shadow-2xl shadow-black/30"><div className="absolute inset-0 flex flex-col items-center justify-center bg-[radial-gradient(circle_at_center,#243a61_0%,#111827_48%,#05070b_100%)]"><div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl text-slate-950 shadow-xl transition hover:scale-105">▶</div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">Now watching</p><h1 className="mt-2 px-4 text-center text-xl font-bold sm:text-2xl">{activeLesson.title}</h1></div><div className="absolute inset-x-0 bottom-0 h-1 bg-white/20"><div className="h-full bg-red-500" style={{ width: completed.has(activeLesson.title) ? "100%" : "38%" }} /></div></div><div className="mt-7 border-b border-white/10 pb-5"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Section 2 · Lesson {activeIndex + 1} of {flatLessons.length}</p><h2 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-white sm:text-3xl">{activeLesson.title}</h2></div><button onClick={toggleComplete} className={`rounded-md px-4 py-2.5 text-sm font-bold transition ${completed.has(activeLesson.title) ? "bg-emerald-500 text-white" : "bg-white text-slate-900 hover:bg-blue-50"}`}>{completed.has(activeLesson.title) ? "Completed" : "Mark as complete"}</button></div><div className="mt-5 flex items-center justify-between gap-3 text-sm text-slate-400"><span>Last watched just now · {activeLesson.duration}</span><div className="flex gap-2"><button onClick={() => setActiveIndex((current) => Math.max(current - 1, 0))} disabled={activeIndex === 0} className="rounded-md border border-white/15 px-3 py-2 font-semibold text-slate-200 transition hover:border-white/40 disabled:cursor-not-allowed disabled:opacity-40">← Previous</button><button onClick={() => setActiveIndex((current) => Math.min(current + 1, flatLessons.length - 1))} disabled={activeIndex === flatLessons.length - 1} className="rounded-md bg-blue-500 px-3 py-2 font-semibold text-white transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40">Next lesson →</button></div></div></div><div className="mt-5 flex gap-6 overflow-x-auto border-b border-white/10 text-sm font-semibold text-slate-400">{["Overview", "Q&A", "Notes", "Announcements"].map((item) => <button key={item} onClick={() => setTab(item)} className={`whitespace-nowrap border-b-2 pb-4 transition ${tab === item ? "border-blue-400 text-white" : "border-transparent hover:text-white"}`}>{item}</button>)}</div><div className="max-w-3xl py-7 text-sm leading-7 text-slate-300">{tab === "Overview" ? <><p>This lesson introduces the mental model behind React components and gives you the foundation for building flexible interfaces.</p><p className="mt-4">Follow along in your editor, pause when you need to experiment, and use the resources in the curriculum panel to review the key ideas.</p></> : <p>There are no {tab.toLowerCase()} for this lesson yet.</p>}</div></div></section><aside className="border-l border-white/10 bg-white text-slate-900"><div className="border-b border-slate-200 px-5 py-5"><div className="flex items-end justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Course content</p><h2 className="mt-1 text-lg font-bold">React.js Complete Course</h2></div><span className="text-sm font-bold text-slate-500">{progress}%</span></div><div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${progress}%` }} /></div><p className="mt-2 text-xs text-slate-500">{completed.size} of {flatLessons.length} lessons complete</p></div><div className="max-h-[calc(100vh-145px)] overflow-y-auto">{sections.map((section) => <div key={section.title} className="border-b border-slate-200"><div className="bg-slate-50 px-5 py-4"><div className="text-sm font-bold">{section.title}</div><div className="mt-1 text-xs text-slate-500">{section.lessons.filter((lesson) => completed.has(lesson.title)).length} / {section.lessons.length} lessons</div></div><div>{section.lessons.map((lesson) => { const index = flatLessons.indexOf(lesson); const isActive = index === activeIndex; return <button key={lesson.title} onClick={() => setActiveIndex(index)} className={`flex w-full items-start gap-3 px-5 py-4 text-left transition ${isActive ? "border-l-4 border-blue-500 bg-blue-50" : "border-l-4 border-transparent hover:bg-slate-50"}`}><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] ${completed.has(lesson.title) ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 text-slate-400"}`}>{completed.has(lesson.title) ? "✓" : ""}</span><span className="min-w-0 flex-1"><span className={`block text-sm font-semibold ${isActive ? "text-blue-700" : "text-slate-700"}`}>{lesson.title}</span><span className="mt-1 block text-xs text-slate-400">{lesson.duration} · Video</span></span>{isActive ? <span className="text-blue-500">▶</span> : null}</button>; })}</div></div>)}</div></aside></main>
    </div>
  );
}
