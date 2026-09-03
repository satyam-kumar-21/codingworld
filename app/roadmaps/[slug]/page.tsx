import Link from "next/link";
import { Footer, SiteHeader } from "@/components/coding-world";
import { findItem, roadmaps } from "@/lib/catalog";

const stages = ["Learn the foundations", "Practice with focused drills", "Build a portfolio project", "Master interview scenarios"];

export default async function RoadmapDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findItem(roadmaps, slug);
  return <><SiteHeader /><main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8"><Link href="/roadmaps" className="text-sm font-semibold text-brand">← Back to roadmaps</Link><section className="mt-6 overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-xl md:p-12"><div className="max-w-3xl"><div className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">{item.category} · {item.eyebrow}</div><h1 className="mt-5 text-5xl font-black tracking-tight">{item.title} Roadmap</h1><p className="mt-5 text-lg leading-8 text-slate-300">{item.detail}</p></div><div className="mt-12 grid gap-3 md:grid-cols-4">{stages.map((stage, index) => <div key={stage} className="relative rounded-2xl border border-slate-800 bg-slate-900 p-4"><div className="text-3xl font-black text-blue-300">0{index + 1}</div><div className="mt-8 text-sm font-semibold">{stage}</div>{index < stages.length - 1 ? <span className="absolute -right-3 top-1/2 hidden text-blue-300 md:block">→</span> : null}</div>)}</div></section><div className="mt-10 grid gap-6 md:grid-cols-3">{["Core skills", "Practice projects", "Job readiness"].map((title, index) => <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Phase {index + 1}</div><h2 className="mt-3 text-xl font-bold text-slate-900">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-600">Clear milestones, recommended resources, and measurable outcomes for this part of your learning path.</p></div>)}</div></main><Footer /></>;
}
