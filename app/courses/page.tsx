import Link from "next/link";
import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";
import { courses } from "@/lib/catalog";

export default function CoursesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-12">
          <SectionHeading
            eyebrow="Career-ready learning"
            title="Build skills that turn into real opportunities"
            description="Explore structured courses built for professionals, students, and aspiring developers who want tangible growth."
          />

          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2 text-sm">
              {"All, JavaScript, React, Node.js, MERN, Next.js, Python, AI".split(", ").map((item) => (
                <button key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-600 transition hover:border-brand hover:text-brand">
                  {item}
                </button>
              ))}
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600">
              10 curated programs
            </div>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <div className="bg-gradient-to-br from-blue-50 to-white p-5">
                <div className="mb-8 flex items-center justify-between">
                  <span className="rounded-full border border-blue-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">
                    {course.category}
                  </span>
                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700">
                    Premium
                  </span>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">📘</div>
              </div>
              <div className="space-y-4 p-5">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{course.eyebrow.split(" · ")[0]}</span>
                  <span>{course.eyebrow.split(" · ")[1]}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                <p className="text-sm text-slate-600">{course.description}</p>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{course.eyebrow.split(" · ")[0]}</span>
                  <span>⭐ 4.8</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-200 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{course.tag === "Free" ? "Free" : "₹2,999"}</div>
                  </div>
                  <Link href={`/courses/${course.slug}`} className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                    View Course
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
