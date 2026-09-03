import { Footer, SiteHeader } from "@/components/coding-world";

const faqs = [
  { question: "Do I need prior coding experience?", answer: "No. Many of our courses are designed for beginners and progressively build skills from fundamentals to advanced topics." },
  { question: "Are the resources free?", answer: "Yes, we offer free content as well as premium resources and programs for learners who want deeper learning paths." },
  { question: "Do you offer certificates?", answer: "Yes, eligible learners receive certificates after successful completion of the relevant coursework and milestones." },
  { question: "What kinds of courses are available?", answer: "We cover JavaScript, React, Node.js, Python, AI, MERN, DSA, interview prep, and project-based learning paths." },
];

export default function FAQPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Frequently asked questions</h1>
        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">{item.question}</h3>
              <p className="mt-3 text-slate-600 leading-7">{item.answer}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
