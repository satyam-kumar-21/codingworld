import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

const posts = [
  { title: "How to build a strong frontend portfolio in 30 days", category: "Web Development", readTime: "6 min read" },
  { title: "JavaScript async patterns every developer should understand", category: "JavaScript", readTime: "5 min read" },
  { title: "Next.js performance optimization checklist", category: "Next.js", readTime: "7 min read" },
  { title: "AI career roadmap for developers in 2026", category: "AI", readTime: "8 min read" },
];

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights & learnings"
          title="Fresh content for curious developers"
          description="Read practical tutorials, career advice, and modern engineering insights from the Coding World team."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
              <div className="h-40 bg-gradient-to-br from-blue-100 via-sky-50 to-white p-5">
                <div className="inline-flex rounded-full border border-blue-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand">{post.category}</div>
              </div>
              <div className="space-y-4 p-5">
                <div className="text-sm text-slate-500">{post.readTime}</div>
                <h3 className="text-xl font-bold text-slate-900">{post.title}</h3>
                <p className="text-sm text-slate-600">Actionable advice for developers improving their technical depth and career readiness.</p>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
