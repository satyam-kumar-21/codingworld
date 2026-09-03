import Link from "next/link";
import { DashboardStat, Footer, SiteHeader } from "@/components/coding-world";

const nav = ["Dashboard", "My Courses", "Continue Learning", "Wishlist", "Certificates", "Notes", "Bookmarks", "Progress", "Orders", "Profile", "Settings"];

const courses = [
  { title: "Next.js Complete Course", lesson: "Authentication & Security", progress: 72, action: "Continue" },
  { title: "JavaScript Complete Course", lesson: "Async JavaScript", progress: 58, action: "Resume" },
  { title: "MERN Stack Bootcamp", lesson: "Deployment Pipeline", progress: 34, action: "Resume" },
];

export default function DashboardPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-6 text-lg font-bold text-slate-900">Student Portal</div>
            <nav className="space-y-2">
              {nav.map((item) => (
                <Link key={item} href="#" className={`block rounded-xl px-3 py-2 text-sm font-medium ${item === "Dashboard" ? "bg-brand text-white" : "text-slate-600 hover:bg-white hover:text-brand"}`}>
                  {item}
                </Link>
              ))}
            </nav>
          </aside>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-brand">Learning dashboard</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">Welcome back, Riya</h1>
                </div>
                <Link href="/learning" className="rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                  Continue learning
                </Link>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <DashboardStat label="Courses Enrolled" value="12" accent="bg-blue-50 text-brand" />
              <DashboardStat label="Completed" value="05" accent="bg-emerald-50 text-emerald-700" />
              <DashboardStat label="Learning Hours" value="184h" accent="bg-violet-50 text-violet-700" />
              <DashboardStat label="Certificates" value="03" accent="bg-amber-50 text-amber-700" />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Continue Learning</h2>
                <Link href="/learning" className="text-sm font-semibold text-brand">Open course</Link>
              </div>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.title} className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <div className="text-sm font-semibold text-brand">{course.title}</div>
                        <div className="mt-1 text-sm text-slate-500">Current lesson: {course.lesson}</div>
                      </div>
                      <div className="text-sm font-semibold text-slate-700">{course.progress}%</div>
                    </div>
                    <div className="mt-4 h-2.5 rounded-full bg-slate-100">
                      <div className="h-2.5 rounded-full bg-brand" style={{ width: `${course.progress}%` }} />
                    </div>
                    <div className="mt-4 flex justify-end">
                      <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-700">{course.action}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Recommended for You</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {[
                  ["Generative AI", "Career-ready AI workflows"],
                  ["Data Structures & Algorithms", "Problem solving for interviews"],
                  ["Python Programming", "Strong fundamentals and automation"],
                ].map(([title, copy]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl shadow-sm">🚀</div>
                    <h3 className="text-base font-bold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
