import { Footer, SiteHeader } from "@/components/coding-world";

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black tracking-tight text-slate-900">Privacy Policy</h1>
        <div className="mt-8 space-y-5 text-slate-600 leading-7">
          <p>Coding World respects user privacy and collects only the information required to provide learning services, improve the experience, and support secure account access.</p>
          <p>We may process account details, course activity, progress data, and payment metadata to deliver a personalized and reliable experience.</p>
          <p>We do not store raw card information for payment processing. Third-party processors may be used to handle billing securely.</p>
          <p>Users can contact us to request information about their data, correction requests, or account deletion inquiries as permitted by law.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
