import Link from "next/link";
import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";
import { roadmaps } from "@/lib/catalog";

export default function RoadmapsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Developer roadmaps"
          title="Follow a clear path from foundation to mastery"
          description="Explore structured learning journeys designed around practical growth, skill depth, and real-world project outcomes."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {roadmaps.map((roadmap, index) => (
            <Link href={`/roadmaps/${roadmap.slug}`} key={roadmap.slug} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-2 hover:border-brand hover:shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">Path {index + 1}</span>
                <span className="text-sm text-slate-500">{roadmap.eyebrow.split(" · ")[0]}</span>
              </div>
              <div className="mb-5 h-2 rounded-full bg-gradient-to-r from-brand via-violet-500 to-emerald-500" />
              <h3 className="text-xl font-bold text-slate-900">{roadmap.title} <span className="text-brand transition group-hover:pl-1">↗</span></h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{roadmap.description}</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                {["Learn", "Practice", "Build", "Master"].map((stage) => <span key={stage} className="rounded-full bg-slate-100 px-3 py-1">{stage}</span>)}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
