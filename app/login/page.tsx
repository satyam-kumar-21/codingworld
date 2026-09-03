import Link from "next/link";
import { Footer, SiteHeader } from "@/components/coding-world";
import { AuthForm } from "@/components/auth-form";

export default function LoginPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:px-8">
        <section className="flex-1 rounded-3xl border border-slate-200 bg-gradient-to-br from-brand to-blue-700 p-8 text-white shadow-xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">Welcome back</p>
          <h1 className="text-4xl font-black tracking-tight">Continue your coding journey.</h1>
          <p className="mt-4 max-w-md text-base text-blue-100">
            Learn with structured lessons, guided projects, and interview-ready resources designed for real industry growth.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-blue-50">
            <li>✅ Beginner-friendly courses</li>
            <li>✅ Premium resources and notes</li>
            <li>✅ Progress tracking and certificates</li>
          </ul>
        </section>

        <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Login to Coding World</h2>
          <p className="mt-2 text-sm text-slate-500">Access your learning dashboard and courses.</p>

          <AuthForm mode="login" />

          <div className="mt-6 text-center text-sm text-slate-500">
            Don’t have an account? <Link href="/register" className="font-semibold text-brand">Create one</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
