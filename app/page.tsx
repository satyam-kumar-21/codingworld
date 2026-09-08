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

const companyLogos = ["Amazon", "Google", "Microsoft", "PayPal", "Samsung", "IBM", "Deloitte", "Goldman"];

const coreOfferings = [
  ["Beginner-Friendly", "Step-by-step courses designed for absolute beginners to kickstart their coding journey."],
  ["Advanced Concepts", "Deep dive into modern frameworks, architectures, and the technologies used in the real world."],
  ["Real-World Projects", "Learn by building production-style projects and working through practical scenarios."],
  ["Affordable Pricing", "Premium learning at prices tailored for students, self-learners, and professionals."],
  ["Comprehensive Resources", "Get notes, templates, guides, and learning resources to move faster and smarter."],
  ["Industry Insights", "Stay current with the trends, tools, and best practices shaping the tech ecosystem."],
];

const testimonials = [
  {
    quote: "I don't have words to thank this platform. If you're a beginner, you can trust this and put your time into it. It will be worth it.",
    name: "Mohit Kumar",
    role: "Web Developer",
  },
  {
    quote: "For everyone who wants to level up their coding and dev skills, this is the place. The content is beginner-friendly and still deep enough for advanced learners.",
    name: "Rakesh Shetty",
    role: "Web Developer",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden pb-20 pt-6">
          <div className="pointer-events-none absolute inset-0 soft-grid opacity-30" />
          <div className="pointer-events-none absolute left-0 top-12 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-12">
            <div className="hero-panel rounded-[32px] p-4 sm:p-6 lg:p-8">
              <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="px-2 py-2 sm:px-4">
                  <div className="mb-5 flex flex-wrap gap-3">
                    {trustBadges.map((badge) => (
                      <FeaturePill key={badge} title={badge} />
                    ))}
                  </div>

                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-orange-300">
                    <span className="inline-block h-2 w-2 rounded-full bg-orange-400" />
                    Learn coding the right way
                  </div>

                  <h1 className="max-w-xl text-5xl font-black tracking-[-0.08em] text-white md:text-7xl">
                    Welcome to <span className="text-orange-400">Coding World</span>
                  </h1>

                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                    Learn programming, web development, AI, and modern tech with practical lessons, real projects, and career-focused guidance designed for learners who want results.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link href="/courses" className="premium-btn inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-slate-950">
                      Explore Courses
                    </Link>
                    <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-100 shadow-[0_12px_24px_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5 hover:border-orange-400 hover:text-orange-300">
                      Read Articles
                    </Link>
                  </div>

                  <div className="mt-10 grid gap-5 sm:grid-cols-3">
                    {[
                      ["100+", "Courses"],
                      ["500K+", "Students"],
                      ["5.0", "Rating"],
                    ].map(([value, label]) => (
                      <div key={label} className="solid-light rounded-[20px] p-4 text-left">
                        <div className="text-3xl font-black tracking-[-0.06em] text-white">{value}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-orange-400/20 blur-2xl" />
                  <div className="absolute -right-4 bottom-0 h-24 w-24 rounded-full bg-violet-400/20 blur-2xl" />
                  <div className="float-card hero-panel relative rounded-[32px] p-4">
                    <div className="rounded-[26px] bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-5">
                      <div className="flex items-center justify-between">
                        <div className="rounded-full border border-orange-500/25 bg-orange-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200">
                          Career Track
                        </div>
                        <div className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                          Live
                        </div>
                      </div>

                      <div className="mt-8 rounded-[24px] border border-slate-800 bg-slate-900/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.38)]">
                        <div className="flex items-center justify-between text-sm text-slate-300">
                          <span>Frontend Path</span>
                          <span>84% complete</span>
                        </div>
                        <div className="mt-4 h-2.5 rounded-full bg-slate-800">
                          <div className="h-2.5 w-[84%] rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200" />
                        </div>
                        <div className="mt-6 grid gap-4 sm:grid-cols-2">
                          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Next lesson</div>
                            <div className="mt-2 text-base font-bold text-white">React Hooks Deep Dive</div>
                          </div>
                          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Project</div>
                            <div className="mt-2 text-base font-bold text-white">Portfolio Builder</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 grid grid-cols-3 gap-3">
                        {[
                          ["Courses", "24"],
                          ["Projects", "18"],
                          ["Roadmaps", "08"],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-center">
                            <div className="text-xl font-black text-white">{value}</div>
                            <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400">{label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950/40 py-6">
          <div className="company-strip mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 rounded-full px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 sm:px-6 lg:px-8">
            {companyLogos.map((logo) => (
              <span key={logo} className="opacity-80">{logo}</span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What you get"
            title="Code smarter with real-world practice"
            description="Take a hands-on path from fundamentals to advanced concepts with projects, interviews, and career-focused learning."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreOfferings.map(([title, body]) => (
              <div key={title} className="feature-card rounded-[28px] p-8 shadow-[0_18px_45px_rgba(15,23,42,0.22)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/15 to-violet-500/15 text-2xl shadow-inner shadow-orange-500/10">✓</div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Popular Tracks"
              title="Master coding with our core offerings"
              description="Choose a path that fits your current level and accelerate your growth with guided learning."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {courseList.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by students who want to build real careers"
            description="Our learners trust the platform to give them clarity, momentum, and practical coding confidence."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="feature-card rounded-[28px] p-8">
                <div className="mb-5 text-4xl text-orange-400">“</div>
                <p className="text-lg leading-8 text-slate-200">{item.quote}</p>
                <div className="mt-6 border-t border-slate-800 pt-4">
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-sm text-slate-400">{item.role}</div>
                </div>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="pb-20">
          <div className="mx-auto max-w-5xl rounded-[30px] border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 px-6 py-12 text-center shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-300">Start your coding journey</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">Learn coding step-by-step with a trusted mentor.</h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/courses" className="premium-btn inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-slate-950">
                Start Now
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-orange-400 hover:text-orange-300">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
