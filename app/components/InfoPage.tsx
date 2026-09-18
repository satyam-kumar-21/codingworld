import Link from "next/link";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  sections: { title: string; body: string }[];
  cta?: { label: string; href: string };
};

export default function InfoPage({ eyebrow, title, description, sections, cta }: InfoPageProps) {
  return (
    <section className="relative min-h-[calc(100vh-170px)] overflow-hidden bg-[#050b14] px-5 py-16 sm:px-8 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
      <div className="relative mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">{eyebrow}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{description}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-white/10 bg-[#091321]/80 p-6 shadow-xl shadow-blue-950/10 sm:p-8">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-400">{section.body}</p>
            </article>
          ))}
        </div>

        {cta && (
          <Link href={cta.href} className="mt-10 inline-flex rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500">
            {cta.label}
          </Link>
        )}
      </div>
    </section>
  );
}