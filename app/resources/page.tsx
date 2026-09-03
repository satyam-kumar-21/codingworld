import Link from "next/link";
import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";
import { resources } from "@/lib/catalog";

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Resource marketplace"
          title="Free and premium learning resources"
          description="Download actionable guides, cheat sheets, templates, and frameworks designed for modern developers."
        />

        <div className="mb-8 flex flex-wrap gap-2 text-sm">
          {"JavaScript, React, Node.js, Next.js, Python, AI, Machine Learning, DSA, Interview Preparation, Cheat Sheets, Roadmaps".split(", ").map((item) => (
            <button key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-600 hover:border-brand hover:text-brand">
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex h-32 items-end rounded-2xl p-4 text-3xl text-white" style={{ background: `linear-gradient(135deg, ${item.accent}, #0f172a)` }}>▱</div>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em]">
                <span className="text-brand">{item.category}</span>
                <span className={item.tag === "Free" ? "text-emerald-700" : "text-amber-700"}>{item.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">Practical, compact, and built to help you learn faster with less friction.</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <span className="text-sm text-slate-500">{item.eyebrow}</span>
                <Link href={`/resources/${item.slug}`} className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">View details</Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
