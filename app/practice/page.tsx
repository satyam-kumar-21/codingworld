import Link from "next/link";
import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

const tracks = [
  { slug: "javascript", title: "JavaScript Arena", copy: "Sharpen fundamentals with bite-sized browser problems.", count: "120 challenges", color: "#f59e0b" },
  { slug: "dsa", title: "DSA Sprint", copy: "Build interview confidence with patterns that repeat.", count: "86 challenges", color: "#2564e5" },
  { slug: "frontend", title: "Frontend Lab", copy: "Practice UI states, accessibility, and responsive layouts.", count: "64 challenges", color: "#06b6d4" },
];

export default function PracticePage() {
  return <><SiteHeader /><main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"><SectionHeading eyebrow="Practice arena" title="Small reps. Big developer energy." description="Turn theory into instinct with focused problems, UI challenges, and interview-style practice tracks." /><div className="grid gap-6 md:grid-cols-3">{tracks.map((track) => <Link href={`/search?q=${track.slug}`} key={track.slug} className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"><div className="flex h-20 items-end rounded-2xl p-4 text-2xl font-black text-white" style={{ background: `linear-gradient(135deg, ${track.color}, #0f172a)` }}>01</div><div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{track.count}</div><h2 className="mt-2 text-2xl font-bold text-slate-900">{track.title} <span className="text-brand transition group-hover:pl-1">↗</span></h2><p className="mt-3 text-sm leading-6 text-slate-600">{track.copy}</p></Link>)}</div></main><Footer /></>;
}
