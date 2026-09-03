import Link from "next/link";
import { CourseCard, FeaturePill, Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

const trustBadges = ["Practical Learning", "Beginner Friendly", "Free + Premium Content", "Career Focused"];

const courseList = [
  {
    category: "JavaScript",
    title: "JavaScript Complete Course",
    description: "Build strong fundamentals with DOM, async patterns, ES6+, and real browser-based projects.",
    level: "Beginner",
    duration: "8 weeks",
    lessons: "42",
    rating: 4.9,
    students: "18.6k",
    price: "2,499",
    originalPrice: "4,999",
    tag: "Premium" as const,
  },
  {
    category: "React",
    title: "React.js Complete Course",
    description: "Learn modern React patterns, hooks, state management, routing, and production-ready UI architecture.",
    level: "Intermediate",
    duration: "7 weeks",
    lessons: "39",
    rating: 4.8,
    students: "12.7k",
    price: "2,999",
    originalPrice: "5,499",
    tag: "Premium" as const,
  },
  {
    category: "Node.js",
    title: "Node.js & Express",
    description: "Build backend APIs, connect databases, secure routes, and deploy service-oriented applications.",
    level: "Intermediate",
    duration: "6 weeks",
    lessons: "35",
    rating: 4.9,
    students: "11.9k",
    price: "3,299",
    originalPrice: "5,999",
    tag: "Premium" as const,
  },
  {
    category: "Next.js",
    title: "Next.js Complete Course",
    description: "Ship scalable full-stack apps with server components, routing, SEO, and deployment patterns.",
    level: "Intermediate",
    duration: "8 weeks",
    lessons: "41",
    rating: 4.9,
    students: "9.8k",
    price: "3,499",
    originalPrice: "6,299",
    tag: "Premium" as const,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 soft-grid opacity-40" />
          <div className="pointer-events-none absolute -left-16 top-12 h-56 w-56 rounded-full bg-brand/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-violet-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <div className="mb-5 flex flex-wrap gap-3">
                  {trustBadges.map((badge) => (
                    <FeaturePill key={badge} title={badge} />
                  ))}
                </div>

                <h1 className="max-w-xl text-5xl font-black tracking-[-0.08em] text-slate-950 md:text-7xl">
                  Learn to Code.<br />
                  <span className="bg-gradient-to-r from-brand via-indigo-500 to-violet-500 bg-clip-text text-transparent">
                    Build Real Projects.
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                  Master programming, web development, AI and modern technologies with practical courses, notes, projects and career-focused resources.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link href="/courses" className="premium-btn inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white">
                    Explore Courses
                  </Link>
                  <Link href="/resources" className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-brand hover:text-brand">
                    Start Learning Free
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap items-center gap-8 text-sm text-slate-500">
                  <div><span className="font-black text-slate-900">18k+</span> students</div>
                  <div><span className="font-black text-slate-900">120+</span> lessons</div>
                  <div><span className="font-black text-slate-900">4.9/5</span> rating</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-blue-400/20 blur-2xl" />
                <div className="absolute -right-4 bottom-0 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl" />
                <div className="glass-panel float-card glow-card relative rounded-[32px] border border-white/70 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                  <div className="rounded-[24px] bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-5">
                    <div className="flex items-center justify-between">
                      <div className="rounded-full border border-blue-200 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand">
                        Career Track
                      </div>
                      <div className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700">
                        Live
                      </div>
                    </div>

                    <div className="mt-8 rounded-[24px] bg-white/85 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-slate-200/80">
                      <div className="flex items-center justify-between text-sm text-slate-500">
                        <span>Frontend Career Path</span>
                        <span>84% complete</span>
                      </div>
                      <div className="mt-4 h-2.5 rounded-full bg-slate-100">
                        <div className="h-2.5 w-[84%] rounded-full bg-gradient-to-r from-brand via-blue-500 to-indigo-500" />
                      </div>
                      <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Next lesson</div>
                          <div className="mt-2 text-base font-bold text-slate-900">React Hooks Deep Dive</div>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Project</div>
                          <div className="mt-2 text-base font-bold text-slate-900">Portfolio Builder</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-3">
                      {[
                        ["Courses", "24"],
                        ["Projects", "18"],
                        ["Roadmaps", "08"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-slate-200 bg-white/90 p-3 text-center shadow-sm">
                          <div className="text-xl font-black text-slate-900">{value}</div>
                          <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/70 py-16 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="What you get"
              title="Learn skills that build careers"
              description="Everything is designed to help you move from learning to building, interviewing, and landing opportunities."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {courseList.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              ["Structured learning", "A clear learning path from fundamentals to real project delivery with guided milestones."],
              ["Practice that matters", "Learn by building application features, solving coding problems, and preparing for interviews."],
              ["Career orientation", "Every course is designed to support job-ready skills, confidence, and practical value."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-[28px] border border-slate-200/80 bg-white/80 p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(37,100,229,0.08)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-indigo-100 text-2xl">✓</div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-slate-900">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-200">Why Coding World</p>
                <h2 className="mt-4 text-4xl font-black tracking-[-0.06em]">Built for serious developers and future-ready learners.</h2>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  ["Free learning resources", "Explore fundamentals, templates, cheat sheets, and learning notes without paying upfront."],
                  ["Premium learning paths", "Unlock detailed courses, guided roadmaps, premium resources and project-based learning."],
                  ["Job preparation", "Practice interviews, strengthen DSAs, and sharpen your frontend/backend problem-solving skills."],
                  ["Real-world focus", "Use projects and portfolio thinking to build confidence before applying for opportunities."],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-[24px] border border-slate-800 bg-slate-900/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.20)]">
                    <div className="mb-3 text-base font-bold text-white">{title}</div>
                    <p className="text-sm leading-6 text-slate-300">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
