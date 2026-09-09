import Link from "next/link";
import Image from "next/image";
import { CourseCard, Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

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
        <section className="relative overflow-hidden pb-12 pt-2 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 soft-grid opacity-30" />
          <div className="pointer-events-none absolute left-0 top-12 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-0 top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8 lg:pt-8">
            <div className="hero-frame rounded-[32px] p-3 sm:p-5 lg:p-6">
              <div className="grid items-center gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-9">
                <div className="animate-rise px-2 py-2 sm:px-4">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    <span className="inline-block h-2 w-2 rounded-full bg-cyan-400" />
                    Learn coding the right way
                  </div>

                  <h1 className="max-w-2xl text-5xl font-black leading-[0.96] tracking-[-0.08em] text-white md:text-7xl">
                    Learn coding. <span className="text-cyan-300">Build real things.</span>
                  </h1>

                  <p className="mt-4 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                    Learn coding with simple lessons, useful projects, and clear steps. Start small, practice often, and grow with confidence.
                  </p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <Link href="/courses" className="premium-btn inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-slate-950">
                      Explore Courses
                    </Link>
                    <Link href="/blog" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-100 shadow-[0_12px_24px_rgba(15,23,42,0.2)] transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300">
                      Read Articles
                    </Link>
                  </div>

                  <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
                    <span className="status-pulse h-2 w-2 rounded-full bg-cyan-300" />
                    <span><strong className="font-semibold text-slate-200">24,000+ builders</strong> are learning by shipping projects.</span>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
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

                <div className="animate-rise animate-rise-delay-2 relative">
                  <div className="absolute -left-8 top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-3xl" />
                  <div className="absolute -right-4 bottom-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl" />
                  <div className="hero-orbit hero-orbit-one opacity-60" />
                  <div className="float-card hero-panel relative rounded-[30px] p-3 sm:p-4">
                    <div className="relative overflow-hidden rounded-[24px] bg-gradient-to-br from-[#081b2d] via-[#071322] to-[#0a1c3a] p-4 sm:p-6">
                      <div className="scan-line pointer-events-none absolute left-0 right-0 top-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" />
                      <div className="relative z-10 mb-5 flex items-center gap-2 border-b border-slate-800 pb-4">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                        <span className="ml-auto font-mono text-[10px] tracking-[0.14em] text-slate-500">coding-world / learn</span>
                      </div>
                      <div className="relative z-10 rounded-[22px] border border-cyan-300/15 bg-slate-950/45 p-3 shadow-2xl shadow-cyan-950/20 sm:p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">Everything in one place</div>
                            <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-white">Learn by doing.</h2>
                          </div>
                          <Image src="/logo.png" alt="Coding World" width={125} height={27} className="hidden h-auto w-[105px] sm:block" />
                        </div>
                        <div className="relative overflow-hidden rounded-xl border border-slate-700/80 bg-gradient-to-br from-cyan-400/10 via-slate-950/70 to-blue-500/10 p-4">
                          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-cyan-300/20" />
                          <div className="relative flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-300 text-lg font-black text-slate-950">&lt;/&gt;</div>
                            <div><div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Start here</div><div className="mt-1 text-lg font-bold text-white">Learn the basics</div></div>
                          </div>
                          <div className="relative mt-5 grid grid-cols-3 gap-2">
                            {[['01', 'Courses'], ['02', 'Projects'], ['03', 'Practice']].map(([number, label], index) => <div key={label} className={`rounded-xl border p-3 ${index === 1 ? 'border-cyan-300/30 bg-cyan-300/10' : 'border-slate-700 bg-slate-900/60'}`}><div className="font-mono text-[10px] text-cyan-300">{number}</div><div className="mt-2 text-xs font-bold text-white">{label}</div></div>)}
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-between text-xs text-slate-400"><span>Simple lessons. Real practice.</span><span className="font-semibold text-cyan-300">Start today</span></div>
                      </div>
                      <div className="relative z-10 mt-3 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-3"><div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">Learn</div><div className="mt-1 text-sm font-bold text-white">Web & AI skills</div><div className="mt-1 text-[10px] text-emerald-300">Step-by-step help</div></div>
                        <div className="rounded-2xl border border-slate-800 bg-slate-950/55 p-3"><div className="text-[10px] uppercase tracking-[0.15em] text-slate-500">Make</div><div className="mt-1 text-sm font-bold text-white">Real things</div><div className="mt-1 text-[10px] text-cyan-300">Use what you learn</div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-950/40 py-4">
          <div className="company-strip mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 rounded-full px-4 py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 sm:px-6 lg:px-8">
            {companyLogos.map((logo) => (
              <span key={logo} className="opacity-80">{logo}</span>
            ))}
          </div>
        </section>

        <section className="animate-rise mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <SectionHeading
            eyebrow="What you get"
            title="Code smarter with real-world practice"
            description="Take a hands-on path from fundamentals to advanced concepts with projects, interviews, and career-focused learning."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreOfferings.map(([title, body], index) => (
              <div key={title} className={`feature-card rounded-[28px] p-7 shadow-[0_18px_45px_rgba(15,23,42,0.22)] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/35 animate-rise animate-rise-delay-${(index % 3) + 1}`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-2xl shadow-inner shadow-cyan-500/10">✓</div>
                <h3 className="text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-950 py-12 text-white sm:py-14">
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

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by students who want to build real careers"
            description="Our learners trust the platform to give them clarity, momentum, and practical coding confidence."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="feature-card rounded-[28px] p-8">
                <div className="mb-5 text-4xl text-cyan-300">“</div>
                <p className="text-lg leading-8 text-slate-200">{item.quote}</p>
                <div className="mt-6 border-t border-slate-800 pt-4">
                  <div className="font-bold text-white">{item.name}</div>
                  <div className="text-sm text-slate-400">{item.role}</div>
                </div>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="pb-14 sm:pb-18">
          <div className="glow-card relative mx-auto max-w-5xl overflow-hidden rounded-[30px] border border-cyan-400/20 bg-gradient-to-r from-cyan-950/50 via-slate-950 to-blue-950/50 px-6 py-10 text-center shadow-[0_30px_80px_rgba(15,23,42,0.35)] sm:px-8 sm:py-12">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Start your coding journey</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.06em] text-white md:text-5xl">Learn coding step-by-step with a trusted mentor.</h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/courses" className="premium-btn inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-slate-950">
                Start Now
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-7 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300">
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
