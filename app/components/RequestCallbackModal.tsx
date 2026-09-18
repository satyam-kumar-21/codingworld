'use client';

import { FormEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Send, X } from 'lucide-react';

export default function RequestCallbackModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (!isMounted) return null;

  return createPortal(
    (
    <div className="no-scrollbar fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="callback-title">
      <div className="no-scrollbar relative my-auto max-h-[calc(100vh-3rem)] w-full max-w-xl overflow-y-auto rounded-2xl border border-blue-400/30 bg-[#07111f] p-6 shadow-2xl shadow-blue-950/50 sm:p-10">
        <button onClick={onClose} aria-label="Close callback form" className="absolute right-4 top-4 rounded-full p-2 text-slate-400 transition hover:bg-white/10 hover:text-white">
          <X className="h-6 w-6" />
        </button>

        <div className="mb-8 pr-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-blue-400">Coding World support</p>
          <h2 id="callback-title" className="text-3xl font-semibold text-white sm:text-4xl">Request a callback</h2>
          <p className="mt-3 text-slate-400">Tell us how we can help and our team will get in touch.</p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-blue-400/30 bg-blue-500/10 p-6 text-center">
            <h3 className="text-xl font-semibold text-white">Request received</h3>
            <p className="mt-2 text-slate-300">Thanks. We will contact you soon.</p>
            <button onClick={onClose} className="mt-5 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500">Close</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <label className="block text-sm font-medium text-slate-300">
              Name
              <input name="name" type="text" placeholder="Enter your name" required className="mt-2 h-12 w-full rounded-lg border border-white/15 bg-black/30 px-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Email
              <input name="email" type="email" placeholder="Enter your email" required className="mt-2 h-12 w-full rounded-lg border border-white/15 bg-black/30 px-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Phone number
              <input name="phone" type="tel" placeholder="Enter your phone number" required className="mt-2 h-12 w-full rounded-lg border border-white/15 bg-black/30 px-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
            </label>
            <label className="block text-sm font-medium text-slate-300">
              Enquiry type
              <select name="enquiry" defaultValue="course" className="mt-2 h-12 w-full rounded-lg border border-white/15 bg-[#0b1728] px-4 text-white outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20">
                <option value="course">Online course</option>
                <option value="bootcamp">Bootcamp</option>
                <option value="offline">Offline program</option>
                <option value="support">General support</option>
              </select>
            </label>
            <label className="block text-sm font-medium text-slate-300">
              How can we help?
              <textarea name="message" rows={4} placeholder="Tell us what you need help with" className="mt-2 w-full resize-y rounded-lg border border-white/15 bg-black/30 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20" />
            </label>
            <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 font-semibold text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#07111f]">
              <Send className="h-4 w-4" />
              Book my callback
            </button>
          </form>
        )}
      </div>
    </div>
    ),
    document.body,
  );
}