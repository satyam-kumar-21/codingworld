import Link from "next/link";
import { Footer, SiteHeader } from "@/components/coding-world";

export default function ForgotPasswordPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-lg px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Account recovery</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-900">Reset your password</h1>
          <p className="mt-3 text-sm text-slate-600">Enter your email address and we’ll send instructions to reset your account password.</p>

          <form className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
              <input type="email" placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand focus:bg-white" />
            </div>
            <button className="w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Send reset link</button>
          </form>

          <div className="mt-6 text-center text-sm text-slate-500">
            Back to <Link href="/login" className="font-semibold text-brand">Login</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
