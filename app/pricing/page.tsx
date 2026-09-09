import Link from "next/link";
import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Flexible plans for every learner"
          description="Learning should be accessible, professional, and designed to help you make progress faster."
        />

        <div className="hero-panel mx-auto max-w-3xl rounded-3xl p-8 text-center sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 font-mono text-xl font-bold text-cyan-300">&lt;/&gt;</div>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-white">Start building with Coding World</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">Create your free account to access practical courses, projects, notes, and a learning dashboard built around your progress.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/register" className="premium-btn rounded-full px-6 py-3 text-sm font-semibold text-slate-950">Create free account</Link>
            <Link href="/login" className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300">Log in</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
