import Link from "next/link";
import { Footer, SiteHeader } from "@/components/coding-world";
import { AuthForm } from "@/components/auth-form";

export default function RegisterPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-brand p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Start learning</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight">Create your free account.</h1>
            <p className="mt-4 text-base text-slate-200">Get access to free learning resources, premium pathways, and a guided developer roadmap.</p>
            <ul className="mt-8 space-y-3 text-sm text-slate-100">
              <li>✅ Access free courses and notes</li>
              <li>✅ Track your learning progress</li>
              <li>✅ Unlock projects and new opportunities</li>
            </ul>
          </div>

          <AuthForm mode="register" />
          <div className="mt-6 text-center text-sm text-slate-500">Already have an account? <Link href="/login" className="font-semibold text-brand">Login</Link></div>
        </div>
      </main>
      <Footer />
    </>
  );
}
