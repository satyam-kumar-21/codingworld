"use client";

import { FormEvent, useState } from "react";

const contentTypes = ["course", "lesson", "note", "resource", "project", "roadmap", "interview-question", "blog"];

export function AdminContentManager() {
  const [message, setMessage] = useState("Ready to create a draft.");
  const [loading, setLoading] = useState(false);

  async function createDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const form = new FormData(event.currentTarget);
    const response = await fetch("/api/admin/content", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(form.entries())) });
    const data = await response.json();
    setLoading(false);
    setMessage(response.ok ? `Draft created: ${data.item.title}` : data.error);
    if (response.ok) event.currentTarget.reset();
  }

  return <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-xl font-bold text-slate-900">Create platform content</h2><p className="mt-1 text-sm text-slate-500">Courses, lectures, resources, projects, roadmaps, and publishing drafts.</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Admin only</span></div><form onSubmit={createDraft} className="mt-6 grid gap-4 md:grid-cols-[180px_1fr_auto]"><select name="type" defaultValue="course" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm"><option disabled>Select type</option>{contentTypes.map((type) => <option key={type}>{type}</option>)}</select><input required name="title" placeholder="e.g. Advanced React Patterns" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-brand" /><button disabled={loading} className="rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-60">{loading ? "Creating..." : "Create draft"}</button></form><p className="mt-4 text-xs text-slate-500" role="status">{message}</p></div>;
}
