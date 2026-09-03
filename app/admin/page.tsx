import { Footer, SiteHeader } from "@/components/coding-world";
import { AdminContentManager } from "@/components/admin-content-manager";

const adminNav = ["Dashboard", "Courses", "Lessons", "Students", "Instructors", "Categories", "Notes", "Resources", "Projects", "Roadmaps", "Interview Questions", "Blog", "Orders", "Payments", "Coupons", "Certificates", "Reviews", "Notifications", "Settings"];

const stats = [{ label: "Total Students", value: "24.8k" }, { label: "Total Courses", value: "128" }, { label: "Total Revenue", value: "₹8.4L" }, { label: "Active Students", value: "8.2k" }];

export default function AdminDashboardPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[230px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="mb-6 text-lg font-bold text-slate-900">Admin Panel</div>
            <nav className="space-y-2 text-sm">
              {adminNav.map((item) => (
                <div key={item} className={`rounded-xl px-3 py-2 ${item === "Dashboard" ? "bg-brand text-white" : "text-slate-600 hover:bg-white hover:text-brand"}`}>
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h1 className="text-3xl font-black tracking-tight text-slate-900">Platform analytics</h1>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
                  <div className="mt-3 text-3xl font-black text-slate-900">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Revenue overview</h2>
                <div className="mt-8 flex h-44 items-end gap-3">
                  {[40, 70, 50, 95, 80, 120, 140].map((value, index) => (
                    <div key={index} className="flex-1 rounded-t-2xl bg-brand/80" style={{ height: `${value}%` }} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-slate-900">Enrollments</h2>
                <div className="mt-8 flex h-44 items-end gap-3">
                  {[55, 85, 65, 110, 95, 130, 150].map((value, index) => (
                    <div key={index} className="flex-1 rounded-t-2xl bg-slate-900" style={{ height: `${value}%` }} />
                  ))}
                </div>
              </div>
            </div>
            <AdminContentManager />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
