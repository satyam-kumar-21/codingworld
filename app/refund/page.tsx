import { Footer, SiteHeader } from "@/components/coding-world";

export default function RefundPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Refund Policy</h1>
        <div className="mt-8 space-y-5 text-slate-600 leading-7">
          <p>Refund requests are reviewed based on the product purchased, time since purchase, and completion status.</p>
          <p>Digital products and course access may be eligible for a refund within a reasonable review period if requested before substantial consumption of the content.</p>
          <p>Refund decisions may vary for bundled resources, premium learning packs, or services that have already been partially delivered.</p>
          <p>To request a refund, contact the support team with the order details, purchase email, and reason for the request.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
