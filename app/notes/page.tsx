"use client";

import { useState } from "react";
import { Footer, SiteHeader } from "@/components/coding-world";
import { NotesPaywallModal } from "@/components/notes-paywall";
import { notes } from "@/lib/catalog";

const noteIcons: Record<string, string> = {
  "JavaScript Notes": "J", 
  "React Notes": "R",
  "Node.js Notes": "N",
};

const logos: Record<string, { bg: string; text: string }> = {
  "JavaScript Notes": { bg: "linear-gradient(135deg, #0ea5e9, #1d4ed8)", text: "#f8fafc" },
  "React Notes": { bg: "linear-gradient(135deg, #a78bfa, #4338ca)", text: "#f8fafc" },
  "Node.js Notes": { bg: "linear-gradient(135deg, #4ade80, #15803d)", text: "#f8fafc" },
};

export default function NotesPage() {
  const [paywallOpen, setPaywallOpen] = useState(false);
  const [selectedNote, setSelectedNote] = useState<string | null>(null);
  const [paidNotes, setPaidNotes] = useState<string[]>([]);

  const downloadNoteFile = (noteTitle: string) => {
    const content = `${noteTitle}\n\nThis is a demo download for ${noteTitle}.`;
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${noteTitle.toLowerCase().replace(/\s+/g, "-")}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownload = (noteTitle: string, tag: "Free" | "Premium") => {
    if (tag === "Premium" && !paidNotes.includes(noteTitle)) {
      setSelectedNote(noteTitle);
      setPaywallOpen(true);
      return;
    }

    downloadNoteFile(noteTitle);
  };

  const handlePay = (amount: number) => {
    if (!selectedNote) return;
    const noteTitle = selectedNote;

    setPaidNotes((items) => [...new Set([...items, noteTitle])]);
    setPaywallOpen(false);
    setSelectedNote(null);
    downloadNoteFile(noteTitle);
    console.log(`Paid ₹${amount} for ${noteTitle}`);
  };

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black tracking-[-0.06em] text-white md:text-6xl">Download Handbooks</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {notes.map((note) => {
            const noteTitle = note.title;
            const isPremium = note.tag === "Premium";
            const unlocked = !isPremium || paidNotes.includes(noteTitle);
            const style = logos[noteTitle] ?? { bg: "linear-gradient(135deg, #0f172a, #1e293b)", text: "#f8fafc" };

            return (
              <article key={noteTitle} className="rounded-[26px] border border-slate-700/80 bg-[#071827]/80 p-5 shadow-[0_18px_45px_rgba(2,12,27,0.55)]">
                <div className="mb-5 flex items-center justify-center">
                  <div
                    className="flex h-28 w-28 items-center justify-center rounded-full border border-slate-600 text-4xl font-black shadow-lg"
                    style={{ background: style.bg, color: style.text }}
                  >
                    {noteIcons[noteTitle] ?? "📘"}
                  </div>
                </div>

                <h3 className="text-center text-2xl font-bold text-white">{noteTitle}</h3>
                <p className="mt-3 text-center text-sm text-slate-400">Download Handbook Here</p>

                <button
                  type="button"
                  onClick={() => handleDownload(noteTitle, note.tag)}
                  className="mt-7 flex w-full items-center justify-center rounded-xl border border-slate-600 bg-slate-800/80 px-4 py-3 text-base font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={!unlocked && isPremium}
                >
                  {isPremium && !unlocked ? "Unlock to Download" : "Download"}
                </button>
              </article>
            );
          })}
        </div>
      </main>

      <NotesPaywallModal
        isOpen={paywallOpen}
        noteTitle={selectedNote ?? "Selected notes"}
        onClose={() => {
          setPaywallOpen(false);
          setSelectedNote(null);
        }}
        onPay={handlePay}
      />

      <Footer />
    </>
  );
}
