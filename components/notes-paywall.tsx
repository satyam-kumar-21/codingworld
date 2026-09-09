"use client";

import { useEffect, useState } from "react";

const paymentOptions = [49, 69, 99, 149, 499, 999, 1999];

export function NotesPaywallModal({
  isOpen,
  noteTitle,
  onClose,
  onPay,
}: {
  isOpen: boolean;
  noteTitle: string;
  onClose: () => void;
  onPay: (amount: number) => void;
}) {
  const [selectedAmount, setSelectedAmount] = useState(paymentOptions[0]);

  useEffect(() => {
    if (isOpen) {
      setSelectedAmount(paymentOptions[0]);
    }
  }, [isOpen, noteTitle]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-8 backdrop-blur-sm">
      <div className="w-full max-w-4xl rounded-[30px] border border-slate-700/80 bg-[#0d1727] p-6 shadow-[0_30px_80px_rgba(1,6,19,0.85)] sm:p-8">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 text-2xl text-slate-300 transition hover:border-cyan-400 hover:text-white"
            aria-label="Close payment dialog"
          >
            ×
          </button>
        </div>

        <div className="mx-auto mt-2 flex h-20 w-20 items-center justify-center rounded-full border border-violet-400/60 bg-violet-500/10 text-4xl shadow-[0_0_24px_rgba(168,85,247,0.25)]">
          ❤️
        </div>

        <h2 className="mt-6 text-center text-3xl font-black tracking-[-0.06em] text-white sm:text-4xl">
          Support Our Platform
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-7 text-slate-300 sm:text-lg">
          We have removed ads and made all our notes and resources completely free to keep education accessible for everyone.
        </p>

        <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-slate-300">
          Your contribution helps us maintain the servers, create new content, and keep this platform running for thousands of students like you.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl font-bold tracking-[-0.04em] text-white">
          Higher amounts help us provide free education to more students! <span aria-hidden="true">✨</span>
        </p>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {paymentOptions.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setSelectedAmount(amount)}
              className={`flex items-center justify-center gap-3 rounded-2xl px-4 py-4 text-2xl font-bold text-white transition ${
                selectedAmount === amount
                  ? "border border-violet-300 bg-violet-500/20 shadow-[0_0_0_1px_rgba(196,181,253,0.75)]"
                  : "border border-violet-300/20 bg-violet-500/15 hover:bg-violet-500/20"
              }`}
            >
              <span aria-hidden="true">💜</span>
              <span>₹{amount}</span>
            </button>
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => {
              onPay(selectedAmount);
              onClose();
            }}
            className="w-full max-w-md rounded-2xl border border-violet-300/50 bg-violet-500/20 px-5 py-4 text-lg font-semibold text-white transition hover:bg-violet-500/25"
          >
            Pay ₹{selectedAmount} to unlock {noteTitle}
          </button>
        </div>

        <p className="mt-5 text-center text-sm font-medium uppercase tracking-[0.14em] text-slate-400">
          I want to continue with supporting this platform
        </p>
      </div>
    </div>
  );
}
