"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type HeaderUser = { name: string; email: string; role: "student" | "admin" };

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [user, setUser] = useState<HeaderUser | null>(null);
  const router = useRouter();
  const mobileLinks = [
    ["Courses", "/courses"],
    ["Resources", "/resources"],
    ["Roadmaps", "/roadmaps"],
    ["Practice", "/practice"],
    ["Interview Prep", "/interview"],
    ["Blog", "/blog"],
  ];

  useEffect(() => {
    fetch("/api/auth/me").then((response) => response.ok ? response.json() : null).then((data) => setUser(data?.user ?? null)).catch(() => setUser(null));
  }, []);

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    setProfileOpen(false);
    setMenuOpen(false);
    router.push("/");
  }

  const firstName = user?.name.split(" ")[0] ?? "Profile";
  const initials = user?.name.split(" ").map((part) => part[0]).slice(0, 2).join("").toUpperCase() ?? "U";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Coding World" width={190} height={41} className="h-auto w-[150px] sm:w-[190px]" priority />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
          <Link href="/courses" className="transition hover:text-cyan-300">Courses</Link>
          <Link href="/resources" className="transition hover:text-cyan-300">Resources</Link>
          <Link href="/roadmaps" className="transition hover:text-cyan-300">Roadmaps</Link>
          <Link href="/practice" className="transition hover:text-cyan-300">Practice</Link>
          <Link href="/interview" className="transition hover:text-cyan-300">Interview Prep</Link>
          <Link href="/blog" className="transition hover:text-cyan-300">Blog</Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <form action="/search" className="relative">
            <input name="q" aria-label="Search Coding World" placeholder="Search anything..." className="w-44 rounded-full border border-slate-700 bg-slate-900/80 py-2 pl-4 pr-9 text-sm text-slate-100 shadow-sm outline-none transition placeholder:text-slate-400 focus:w-56 focus:border-cyan-400/70" />
            <span className="search-icon pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
          </form>
          {user ? <div className="relative">
            <button type="button" onClick={() => setProfileOpen((open) => !open)} aria-expanded={profileOpen} className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 py-1.5 pl-1.5 pr-3 text-left transition hover:border-cyan-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 text-xs font-black text-slate-950">{initials}</span>
              <span className="max-w-24 truncate text-sm font-semibold text-slate-200">{firstName}</span>
              <span className={`profile-chevron ${profileOpen ? "profile-chevron-open" : ""}`} aria-hidden="true" />
            </button>
            {profileOpen ? <div className="absolute right-0 top-12 w-56 rounded-2xl border border-slate-700 bg-slate-950 p-2 shadow-2xl">
              <div className="border-b border-slate-800 px-3 pb-3 pt-2"><div className="truncate text-sm font-semibold text-white">{user.name}</div><div className="mt-1 truncate text-xs text-slate-500">{user.email}</div></div>
              <Link href="/profile" onClick={() => setProfileOpen(false)} className="mt-1 block rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300">My profile</Link>
              <Link href="/profile?tab=learning" onClick={() => setProfileOpen(false)} className="block rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-300">My learning</Link>
              <button type="button" onClick={logout} className="w-full rounded-xl px-3 py-2.5 text-left text-sm text-rose-300 hover:bg-rose-400/10">Log out</button>
            </div> : null}
          </div> : <>
            <Link href="/login" className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-medium text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-300">Login</Link>
            <Link href="/pricing" className="premium-btn inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold text-slate-950">Get Started</Link>
          </>}
        </div>

        <button
          type="button"
          className="rounded-xl border border-slate-700 bg-slate-900/80 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="block text-xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>
      {menuOpen ? (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-5 pt-3 shadow-2xl lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1" aria-label="Mobile navigation">
            {mobileLinks.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-cyan-400/10 hover:text-cyan-300">
                {label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-slate-800 pt-3">
              {user ? <><Link href="/profile" onClick={() => setMenuOpen(false)} className="rounded-xl border border-slate-700 px-3 py-3 text-center text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300">My profile</Link><button type="button" onClick={logout} className="rounded-xl border border-rose-400/20 px-3 py-3 text-sm text-rose-300">Log out</button></> : <><Link href="/login" onClick={() => setMenuOpen(false)} className="rounded-xl border border-slate-700 px-3 py-3 text-center text-sm font-medium text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">Login</Link><Link href="/pricing" onClick={() => setMenuOpen(false)} className="premium-btn rounded-xl px-3 py-3 text-center text-sm font-semibold text-slate-950">Get Started</Link></>}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="space-y-3 lg:col-span-1">
          <Image src="/logo.png" alt="Coding World" width={190} height={41} className="h-auto w-[170px]" />
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
  const thumbnail = category.toLowerCase().includes("react")
    ? "/course-react.svg"
    : category.toLowerCase().includes("node")
      ? "/course-node.svg"
      : category.toLowerCase().includes("next")
        ? "/course-nextjs.svg"
        : "/course-javascript.svg";

  return (
    <article className="course-card group flex h-full flex-col overflow-hidden rounded-[24px] p-0 shadow-[0_18px_50px_rgba(15,23,42,0.26)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/40 hover:shadow-[0_24px_60px_rgba(0,184,240,0.16)]">
      <div className="relative h-44 shrink-0 overflow-hidden bg-slate-950">
        <Image src={thumbnail} alt={`${category} course thumbnail`} width={640} height={360} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-slate-950/20" />
        <div className="absolute inset-x-5 top-5 flex items-start justify-between">
          <span className="rounded-full border border-cyan-300/30 bg-slate-950/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-sm">
            {category}
          </span>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm ${tag === "Free" ? "bg-emerald-500/15 text-emerald-300" : "bg-cyan-400/15 text-cyan-200"}`}>
            {tag}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{level}</span>
          <span>{duration}</span>
        </div>
        <h3 className="min-h-[3.5rem] text-xl font-bold leading-tight tracking-[-0.04em] text-white">{title}</h3>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>{lessons} lessons</span>
          <span className="text-amber-300">★ <span className="text-slate-300">{rating}</span></span>
        </div>
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-slate-800 pt-4">
          <div>
            <div className="text-sm text-slate-400">{students} students</div>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-xl font-black tracking-[-0.05em] text-white">₹{price}</span>
              {originalPrice ? <span className="text-sm text-slate-500 line-through">₹{originalPrice}</span> : null}
            </div>
          </div>
          <Link href={`/courses/${title.toLowerCase().includes("react") ? "react" : title.toLowerCase().includes("node") ? "node" : title.toLowerCase().includes("next") ? "nextjs" : "javascript"}`} className="premium-btn inline-flex min-w-[92px] items-center justify-center rounded-xl px-3 py-2.5 text-center text-xs font-bold leading-tight text-slate-950">
            View<br />Course
          </Link>
        </div>
      </div>
    </article>
  );
}

export function FeaturePill({ title }: { title: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-slate-900/80 px-3 py-2 text-sm font-medium text-cyan-300 shadow-[0_12px_24px_rgba(0,184,240,0.1)] backdrop-blur-sm">
      <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />
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
