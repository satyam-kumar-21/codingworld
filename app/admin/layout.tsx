import type { ReactNode } from "react";
import Link from "next/link";

const navSections = [
  { title: "Overview", items: [{ label: "Dashboard", href: "/admin" }, { label: "Courses", href: "/admin/courses" }, { label: "Students", href: "/admin" }, { label: "Analytics", href: "/admin" }] },
  { title: "Content", items: [{ label: "Categories", href: "/admin" }, { label: "Resources", href: "/admin" }, { label: "Media Library", href: "/admin" }, { label: "Reviews", href: "/admin" }] },
  { title: "Sales", items: [{ label: "Orders", href: "/admin" }, { label: "Payments", href: "/admin" }, { label: "Coupons", href: "/admin" }, { label: "Certificates", href: "/admin" }] },
  { title: "Settings", items: [{ label: "Admins & Roles", href: "/admin" }, { label: "Activity Logs", href: "/admin" }, { label: "Settings", href: "/admin" }] },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex max-w-[1600px] gap-6 px-4 py-6 lg:px-6">
        <aside className="hidden w-72 shrink-0 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm lg:block">
          <div className="mb-6 flex items-center gap-3 border-b border-slate-200 pb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-black text-white">CW</div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Admin</div>
              <div className="text-lg font-black tracking-tight text-slate-900">Coding World</div>
            </div>
          </div>

          <nav className="space-y-5">
            {navSections.map((section) => (
              <div key={section.title}>
                <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">{section.title}</div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link key={item.label} href={item.href} className="flex items-center rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-700">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        <div className="flex-1">
          <header className="mb-6 flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Operations overview</div>
              <h1 className="mt-1 text-2xl font-black tracking-tight text-slate-900">LMS Control Center</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">Super Admin</div>
              <button type="button" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">Create Course</button>
            </div>
          </header>

          {children}
        </div>
      </div>
    </div>
  );
}
