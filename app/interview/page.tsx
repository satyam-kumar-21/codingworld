import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

const interviewTopics = [
  "JavaScript Interview Questions",
  "React Interview Questions",
  "Node.js Interview Questions",
  "MongoDB Interview Questions",
  "Next.js Interview Questions",
  "HTML/CSS Questions",
  "DSA Questions",
  "Full Stack Interview Questions",
];

export default function InterviewPrepPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interview prep"
          title="Practice the questions companies actually ask"
          description="Prepare for coding interviews with structured question sets, answer frameworks, and practice-oriented learning tracks."
        />

        <div className="mb-8 flex flex-wrap gap-2 text-sm">
          {"Search, Difficulty, Filter by role, JavaScript, React, Node.js, DSA".split(", ").map((item) => (
            <button key={item} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-600 hover:border-brand hover:text-brand">
              {item}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {interviewTopics.map((topic, index) => (
            <div key={topic} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-brand-soft px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">{index + 1}/8</div>
              <h3 className="text-xl font-bold text-slate-900">{topic}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">Common questions, curated answer structures, and practice guidance for technical interview confidence.</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
