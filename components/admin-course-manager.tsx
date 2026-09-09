"use client";

import { useEffect, useMemo, useState } from "react";

type CourseStatus = "draft" | "published" | "archived";

type CourseItem = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  level: string;
  language: string;
  price: number;
  discountPrice?: number;
  duration: string;
  instructor: string;
  status: CourseStatus;
  featured?: boolean;
  tags: string[];
};

const emptyForm = {
  title: "",
  slug: "",
  shortDescription: "",
  description: "",
  category: "Programming",
  level: "Beginner",
  language: "English",
  price: "2999",
  discountPrice: "",
  duration: "4 weeks",
  instructor: "Coding World",
  status: "draft" as CourseStatus,
  featured: false,
  tags: "javascript, web development",
};

export function AdminCourseManager() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const totalRevenue = useMemo(
    () => courses.reduce((sum, course) => sum + Number(course.price || 0), 0),
    [courses]
  );

  async function loadCourses() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/courses", { cache: "no-store" });
      const data = await res.json();
      setCourses(data.items ?? []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCourses();
  }, []);

  function handleChange<K extends keyof typeof emptyForm>(key: K, value: (typeof emptyForm)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function resetForm() {
    setForm(emptyForm);
    setEditingId(null);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);

    const payload = {
      ...form,
      price: Number(form.price || 0),
      discountPrice: form.discountPrice ? Number(form.discountPrice) : undefined,
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    };

    try {
      const method = editingId ? "PUT" : "POST";
      const endpoint = editingId ? `/api/admin/courses/${editingId}` : "/api/admin/courses";
      const res = await fetch(endpoint, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to save course.");
      }
      resetForm();
      await loadCourses();
      window.alert(data.message || "Course saved successfully.");
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Something went wrong.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: string) {
    if (!window.confirm("Delete this course? This action cannot be undone.")) {
      return;
    }
    try {
      const res = await fetch(`/api/admin/courses/${id}`, { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Delete failed");
      }
      await loadCourses();
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Delete failed");
    }
  }

  async function handleDuplicate(course: CourseItem) {
    const payload = {
      ...course,
      title: `${course.title} Copy`,
      slug: `${course.slug}-copy`,
      status: "draft" as CourseStatus,
    };
    try {
      const res = await fetch("/api/admin/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Copy failed");
      await loadCourses();
      window.alert(data.message || "Course duplicated.");
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Duplicate failed");
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Course management</div>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">All courses</h2>
          </div>
          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700">
            Revenue: ₹{totalRevenue.toLocaleString()}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-semibold">Course</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Price</th>
                <th className="px-4 py-3 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              {loading ? (
                <tr>
                  <td colSpan={4} className="px-4 py-10 text-center text-slate-500">
                    Loading courses...
                  </td>
                </tr>
              ) : courses.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-4 py-10 text-center text-slate-500">
                    No courses yet. Create your first course.
                  </td>
                </tr>
              ) : (
                courses.map((course) => (
                  <tr key={course.id} className="align-top hover:bg-slate-50">
                    <td className="px-4 py-4">
                      <div className="font-semibold text-slate-900">{course.title}</div>
                      <div className="mt-1 text-xs text-slate-500">{course.category}</div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${course.status === "published" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-slate-800">₹{Number(course.price || 0).toLocaleString()}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setEditingId(course.id);
                            setForm({
                              title: course.title,
                              slug: course.slug,
                              shortDescription: course.shortDescription,
                              description: course.description,
                              category: course.category,
                              level: course.level,
                              language: course.language,
                              price: String(course.price || 0),
                              discountPrice: course.discountPrice ? String(course.discountPrice) : "",
                              duration: course.duration,
                              instructor: course.instructor,
                              status: course.status,
                              featured: Boolean(course.featured),
                              tags: (course.tags ?? []).join(", "),
                            });
                          }}
                          className="rounded-full border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDuplicate(course)}
                          className="rounded-full border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-300"
                        >
                          Duplicate
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(course.id)}
                          className="rounded-full border border-rose-200 bg-rose-50 px-2.5 py-1.5 text-xs font-medium text-rose-700 hover:bg-rose-100"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Course editor</div>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-900">{editingId ? "Edit course" : "Create course"}</h2>
          </div>
          {editingId ? (
            <button type="button" onClick={resetForm} className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700">
              Cancel
            </button>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Course title</label>
            <input value={form.title} onChange={(event) => handleChange("title", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="Complete JavaScript Course" required />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Slug</label>
              <input value={form.slug} onChange={(event) => handleChange("slug", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="complete-javascript-course" required />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Category</label>
              <input value={form.category} onChange={(event) => handleChange("category", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" required />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Short description</label>
            <textarea value={form.shortDescription} onChange={(event) => handleChange("shortDescription", event.target.value)} className="min-h-20 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" required />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Full description</label>
            <textarea value={form.description} onChange={(event) => handleChange("description", event.target.value)} className="min-h-28 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" required />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Level</label>
              <select value={form.level} onChange={(event) => handleChange("level", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500">
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
                <option>All Levels</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Language</label>
              <input value={form.language} onChange={(event) => handleChange("language", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Price</label>
              <input type="number" value={form.price} onChange={(event) => handleChange("price", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Discount</label>
              <input type="number" value={form.discountPrice} onChange={(event) => handleChange("discountPrice", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Duration</label>
              <input value={form.duration} onChange={(event) => handleChange("duration", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" required />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Instructor</label>
              <input value={form.instructor} onChange={(event) => handleChange("instructor", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" required />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700">Status</label>
              <select value={form.status} onChange={(event) => handleChange("status", event.target.value as CourseStatus)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-700">Tags</label>
            <input value={form.tags} onChange={(event) => handleChange("tags", event.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none focus:border-blue-500" placeholder="javascript, react, web development" />
          </div>

          <label className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700">
            <input type="checkbox" checked={form.featured} onChange={(event) => handleChange("featured", event.target.checked)} />
            Featured course
          </label>

          <div className="flex flex-wrap gap-3 pt-2">
            <button type="submit" disabled={saving} className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60">
              {saving ? "Saving..." : editingId ? "Update course" : "Create course"}
            </button>
            <button type="button" onClick={resetForm} className="rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700">
              Clear
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
