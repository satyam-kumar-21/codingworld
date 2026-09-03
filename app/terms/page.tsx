import { Footer, SiteHeader } from "@/components/coding-world";

export default function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Terms & Conditions</h1>
        <div className="mt-8 space-y-5 text-slate-600 leading-7">
          <p>By accessing or using Coding World, you agree to the rules and policies described in this document.</p>
          <p>Users must use the platform responsibly, maintain the security of their account, and use the provided content only for lawful educational purposes.</p>
          <p>Course access, premium resources, and digital content may be subject to licensing and usage conditions set by Coding World.</p>
          <p>We reserve the right to update pricing, products, and service terms at any time with reasonable notice.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
