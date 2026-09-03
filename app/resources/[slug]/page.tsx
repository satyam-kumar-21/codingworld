import Link from "next/link";
import { Footer, SiteHeader } from "@/components/coding-world";
import { findItem, resources } from "@/lib/catalog";

export default async function ResourceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = findItem(resources, slug);
  return <DetailShell item={item} kind="Resource" action={item.tag === "Free" ? "Download resource" : "Unlock resource"} />;
}

function DetailShell({ item, kind, action }: { item: ReturnType<typeof findItem>; kind: string; action: string }) {
  return (
    <><SiteHeader /><main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <Link href="/resources" className="text-sm font-semibold text-brand">← Back to resources</Link>
      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.7fr]">
        <section><div className="mb-5 inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{kind} · {item.category}</div><h1 className="text-5xl font-black tracking-tight text-slate-900">{item.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{item.description}</p><div className="mt-8 rounded-3xl p-8 text-white shadow-xl" style={{ background: `linear-gradient(135deg, ${item.accent}, #0f172a)` }}><div className="text-sm uppercase tracking-[0.2em] text-white/70">{item.eyebrow}</div><div className="mt-16 text-6xl font-black">{item.category}</div></div></section>
        <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div className="text-sm text-slate-500">Included in this resource</div><h2 className="mt-2 text-2xl font-bold text-slate-900">A focused reference you can actually use.</h2><p className="mt-4 text-sm leading-6 text-slate-600">{item.detail}</p><button className="mt-8 w-full rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">{action}</button></aside>
      </div>
    </main><Footer /></>
  );
}
