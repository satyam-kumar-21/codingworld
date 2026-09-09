import { AdminCourseManager } from "@/components/admin-course-manager";

export default function AdminCoursesPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Course library</div>
            <h2 className="mt-1 text-3xl font-black tracking-tight text-slate-900">Manage courses</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-medium text-emerald-700">Published</span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 font-medium text-amber-700">Draft</span>
          </div>
        </div>
      </section>

      <AdminCourseManager />
    </div>
  );
}
