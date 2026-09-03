import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";
import Link from "next/link";
import { projects } from "@/lib/catalog";

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project library"
          title="Build projects that showcase your skills"
          description="Work on portfolio-ready, real-world builds across frontend, backend, MERN, AI, and full-stack engineering."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex h-40 items-end rounded-2xl p-5 text-3xl font-black text-white" style={{ background: `linear-gradient(135deg, ${project.accent}, #0f172a)` }}>{project.category}</div>
              <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                <span>{project.category}</span>
                <span className="text-slate-500">{project.eyebrow.split(" · ")[0]}</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
              <div className="mt-5 flex gap-2">
                <Link href={`/projects/${project.slug}`} className="rounded-full bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700">View project</Link>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 hover:border-brand hover:text-brand">Live Demo</button>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
