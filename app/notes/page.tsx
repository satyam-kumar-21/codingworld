import Link from "next/link";
import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";
import { notes } from "@/lib/catalog";

export default function NotesPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Notes marketplace"
          title="Smart notes for faster understanding"
          description="Structured topic-by-topic notes designed to simplify learning and improve recall for real-world implementation."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {notes.map((note) => (
            <article key={note.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl text-2xl text-white" style={{ background: `linear-gradient(135deg, ${note.accent}, #0f172a)` }}>📘</div>
                <span className={note.tag === "Free" ? "rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700" : "rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700"}>{note.tag}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{note.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{note.description}</p>
              <Link href={`/notes/${note.slug}`} className="mt-5 inline-flex rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                View notes
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
