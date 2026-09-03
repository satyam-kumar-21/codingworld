import { Footer, SiteHeader } from "@/components/coding-world";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">Contact</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight">Coding World</h1>
            <div className="mt-8 space-y-3 text-sm text-slate-200">
              <p>Email: <a href="mailto:info.codingworld@outlook.com" className="text-white underline">info.codingworld@outlook.com</a></p>
              <p>Address: Sector 141, Noida, Uttar Pradesh, India</p>
            </div>
            <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-200">
              Support is available for admissions, course guidance, payment questions, and learning support.
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
            <form className="mt-6 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Your name" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="you@example.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Subject</label>
                <input type="text" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Course or support inquiry" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                <textarea className="min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Tell us how we can help" />
              </div>
              <button className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
