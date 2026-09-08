import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 text-lg font-black text-slate-950 shadow-[0_18px_35px_rgba(249,115,22,0.35)]">
            C
          </div>
          <div>
            <div className="text-lg font-black tracking-[-0.05em] text-white">Coding World</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-slate-400">learn • build • grow</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
          <Link href="/courses" className="transition hover:text-amber-300">Courses</Link>
          <Link href="/resources" className="transition hover:text-amber-300">Resources</Link>
          <Link href="/roadmaps" className="transition hover:text-amber-300">Roadmaps</Link>
          <Link href="/practice" className="transition hover:text-amber-300">Practice</Link>
          <Link href="/interview" className="transition hover:text-amber-300">Interview Prep</Link>
          <Link href="/blog" className="transition hover:text-amber-300">Blog</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <form action="/search" className="relative">
            <input name="q" aria-label="Search Coding World" placeholder="Search anything..." className="w-44 rounded-full border border-slate-700 bg-slate-900/80 py-2 pl-4 pr-9 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-400 focus:w-56 focus:border-amber-400/70" />
            <span className="pointer-events-none absolute right-3 top-2 text-slate-400">⌕</span>
          </form>
          <Link href="/login" className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-amber-400 hover:text-amber-300">
            Login
          </Link>
          <Link href="/pricing" className="premium-btn inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-slate-950">
            Get Started
          </Link>
        </div>

        <button className="rounded-xl border border-slate-700 bg-slate-900/80 p-2 text-slate-200 lg:hidden" aria-label="Open menu">
          ☰
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="space-y-3 lg:col-span-1">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-lg font-black text-slate-950">C</div>
            <div>
              <div className="text-lg font-bold text-white">Coding World</div>
            </div>
          </div>
          <p className="text-sm text-slate-400">Learn coding, build projects and grow your career with premium guidance.</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Learn</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/courses" className="hover:text-white">Courses</Link></li>
            <li><Link href="/courses" className="hover:text-white">Free Courses</Link></li>
            <li><Link href="/roadmaps" className="hover:text-white">Roadmaps</Link></li>
            <li><Link href="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link href="/interview" className="hover:text-white">Interview Prep</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/notes" className="hover:text-white">Notes</Link></li>
            <li><Link href="/resources" className="hover:text-white">Cheat Sheets</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link href="/resources" className="hover:text-white">Free Resources</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-white">About</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-200">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/refund" className="hover:text-white">Refund Policy</Link></li>
          </ul>
          <div className="mt-5 space-y-2 text-sm text-slate-400">
            <p><a href="mailto:info.codingworld@outlook.com" className="hover:text-white">info.codingworld@outlook.com</a></p>
            <p>Sector 141, Noida, Uttar Pradesh, India</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 text-sm text-slate-500 sm:px-6 lg:px-8">
          <p>© 2026 Coding World. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string; }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow ? <p className="orange-badge mb-3 inline-flex rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black tracking-[-0.06em] text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-slate-300">{description}</p> : null}
    </div>
  );
}

export function CourseCard({
  category,
  title,
  description,
  level,
  duration,
  lessons,
  rating,
  students,
  price,
  originalPrice,
  tag,
}: {
  category: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  lessons: string;
  rating: number;
  students: string;
  price: string;
  originalPrice?: string;
  tag: "Free" | "Premium";
}) {
  return (
    <article className="course-card group overflow-hidden rounded-[28px] p-0 shadow-[0_18px_50px_rgba(15,23,42,0.26)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(249,115,22,0.16)]">
      <div className="h-44 bg-gradient-to-br from-orange-500/10 via-white/5 to-violet-500/10 p-5">
        <div className="flex items-start justify-between">
          <span className="rounded-full border border-amber-400/20 bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-orange-300">
            {category}
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] ${tag === "Free" ? "bg-emerald-500/10 text-emerald-300" : "bg-amber-400/10 text-amber-300"}`}>
            {tag}
          </span>
        </div>
        <div className="mt-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-2xl shadow-lg shadow-slate-950/80">💻</div>
      </div>
      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{level}</span>
          <span>{duration}</span>
        </div>
        <h3 className="text-xl font-bold tracking-[-0.04em] text-white">{title}</h3>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{lessons} lessons</span>
          <span>⭐ {rating}</span>
        </div>
        <div className="flex items-center justify-between border-t border-slate-800 pt-4">
          <div>
            <div className="text-sm text-slate-400">{students} students</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-2xl font-black tracking-[-0.05em] text-white">₹{price}</span>
              {originalPrice ? <span className="text-sm text-slate-500 line-through">₹{originalPrice}</span> : null}
            </div>
          </div>
          <Link href={`/courses/${title.toLowerCase().includes("react") ? "react" : title.toLowerCase().includes("node") ? "node" : title.toLowerCase().includes("next") ? "nextjs" : "javascript"}`} className="premium-btn inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-slate-950">
            View Course
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FeaturePill({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-slate-900/80 px-3 py-2 text-sm font-medium text-amber-300 shadow-[0_12px_24px_rgba(249,115,22,0.1)] backdrop-blur-sm">
      <span className="inline-block h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)]" />
      {title}
    </div>
  );
}

export function DashboardStat({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div className="rounded-[22px] border border-slate-800 bg-slate-900/80 p-4 shadow-[0_16px_32px_rgba(15,23,42,0.2)]">
      <div className={`mb-3 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${accent ?? "bg-slate-800 text-slate-300"}`}>{label}</div>
      <div className="text-2xl font-black tracking-[-0.05em] text-white">{value}</div>
    </div>
  );
}
