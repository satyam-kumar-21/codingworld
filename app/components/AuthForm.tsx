'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

type AuthMode = 'signin' | 'signup';

const inputClassName =
  'mt-2 h-12 w-full rounded-lg border border-white/15 bg-white/[0.03] px-4 text-base text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20';

export default function AuthForm({ mode }: { mode: AuthMode }) {
  const isSignUp = mode === 'signup';
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="relative flex min-h-[calc(100vh-88px)] items-center justify-center overflow-hidden bg-[#050b14] px-5 py-16 sm:px-8">
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <section className="relative w-full max-w-[520px] rounded-2xl border border-white/10 bg-[#091321]/90 p-6 shadow-2xl shadow-blue-950/30 sm:p-10">
        <div className="mb-8 flex justify-center">
          <Image src="/logo.png" alt="Coding World" width={190} height={49} className="h-auto w-44" priority />
        </div>

        <h1 className="text-4xl font-semibold tracking-tight text-white">{isSignUp ? 'Create your account' : 'Welcome back'}</h1>
        <p className="mt-2 text-base text-slate-400">
          {isSignUp ? 'Start your coding journey with Coding World.' : 'Sign in to continue learning with Coding World.'}
        </p>

        <div className="mt-6 text-sm text-slate-400">
          {isSignUp ? 'Already have an account?' : 'New to Coding World?'}{' '}
          <Link href={isSignUp ? '/signin' : '/signup'} className="font-medium text-blue-400 transition hover:text-blue-300">
            {isSignUp ? 'Sign in' : 'Create an account'}
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {isSignUp && (
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-medium text-slate-300">
                First name
                <input name="firstName" type="text" placeholder="Your first name" required className={inputClassName} />
              </label>
              <label className="text-sm font-medium text-slate-300">
                Last name
                <input name="lastName" type="text" placeholder="Your last name" required className={inputClassName} />
              </label>
            </div>
          )}

          {isSignUp && (
            <label className="block text-sm font-medium text-slate-300">
              Email address
              <input name="email" type="email" placeholder="you@example.com" required className={inputClassName} />
            </label>
          )}

          <label className="block text-sm font-medium text-slate-300">
            Phone number
            <input name="phone" type="tel" placeholder="Enter your phone number" required className={inputClassName} />
          </label>

          {isSignUp && (
            <label className="flex items-start gap-3 text-sm leading-6 text-slate-400">
              <input type="checkbox" required className="mt-1 h-4 w-4 accent-blue-500" />
              <span>I agree to receive updates from Coding World by WhatsApp, SMS, email, and phone.</span>
            </label>
          )}

          <button type="submit" className="h-12 w-full rounded-lg bg-blue-600 px-5 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#091321]">
            {isSignUp ? 'Create account' : 'Sign in'}
          </button>

          {submitted && <p className="text-center text-sm text-blue-300">Thanks. Your form is ready to connect to authentication.</p>}
        </form>

        <div className="my-7 flex items-center gap-4 text-sm text-slate-500">
          <span className="h-px flex-1 bg-white/15" />
          <span>or</span>
          <span className="h-px flex-1 bg-white/15" />
        </div>

        <button type="button" className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-white/15 bg-white/[0.03] text-slate-300 transition hover:border-blue-400/60 hover:bg-blue-500/10">
          <span className="text-lg font-bold text-blue-400">G</span>
          Continue with Google
        </button>
      </section>
    </main>
  );
}