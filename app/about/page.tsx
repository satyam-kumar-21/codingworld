import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Coding World"
          title="Practical coding education for real career growth"
          description="Coding World is built to help students, beginners, and working professionals learn modern technology with clarity, consistency, and purpose."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Our mission</h3>
            <p className="mt-4 text-slate-600 leading-7">To make high-quality coding education accessible, structured, and career-focused so learners can build confidence and real technical ability.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">Our vision</h3>
            <p className="mt-4 text-slate-600 leading-7">To become a trusted global learning platform where learners can code, practice, build projects, and grow into job-ready developers.</p>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["What we provide", "Courses, notes, roadmaps, projects, interview prep, and premium learning resources."],
            ["Learning philosophy", "Hands-on, job-focused learning designed around real outcomes and product thinking."],
            ["Why Coding World", "Strong guidance, realistic projects, practical resources, and trustworthy content."],
            ["Free + premium", "A mix of accessible learning and premium pathways for deeper mastery and career acceleration."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
