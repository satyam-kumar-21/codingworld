import Link from "next/link";
import { Footer, SectionHeading, SiteHeader } from "@/components/coding-world";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Start with foundational learning and free roadmaps.",
    features: ["Free courses", "Free notes", "Free resources", "Basic roadmaps"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹2,999",
    description: "Unlock the full Coding World learning experience.",
    features: ["Premium courses", "Premium notes", "Projects", "Interview prep", "Certificates", "Premium resources"],
    cta: "Choose Premium",
    highlight: true,
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple pricing"
          title="Flexible plans for every learner"
          description="Learning should be accessible, professional, and designed to help you make progress faster."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-3xl border p-8 ${plan.highlight ? "border-brand bg-brand text-white shadow-lg" : "border-slate-200 bg-white text-slate-900"}`}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                {plan.highlight ? <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">Most Popular</span> : null}
              </div>
              <div className={`mb-4 text-4xl font-black ${plan.highlight ? "text-white" : "text-slate-900"}`}>{plan.price}<span className="text-base font-medium opacity-80">/month</span></div>
              <p className={`mb-6 text-sm ${plan.highlight ? "text-blue-100" : "text-slate-600"}`}>{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${plan.highlight ? "bg-white text-brand" : "bg-blue-50 text-brand"}`}>✓</span>
                    <span className={plan.highlight ? "text-blue-50" : "text-slate-700"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/login" className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${plan.highlight ? "bg-white text-brand hover:bg-slate-100" : "bg-brand text-white hover:bg-blue-700"}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
