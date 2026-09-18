import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Coding World Support | Help with Courses and Learning",
  description: "Get help with Coding World courses, account questions, learning resources, and program guidance.",
  keywords: ["Coding World support", "coding course help", "learning support", "developer course assistance"],
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return (
    <InfoPage
      eyebrow="Learner Support"
      title="Get unstuck and keep building."
      description="Our support resources are here to help you choose the right learning path, understand your course access, and keep making progress."
      sections={[
        { title: "Course guidance", body: "Not sure where to begin? Tell us about your goals and we can help you choose a suitable Coding World program." },
        { title: "Technical questions", body: "Share the details of the challenge you are facing so our team can point you toward the right resource or next step." },
        { title: "Account help", body: "We can help with sign-in, registration, course access, and general account questions." },
        { title: "Contact our team", body: "For direct assistance, send your question through the contact page and include enough detail for a useful response." },
      ]}
      cta={{ label: "Contact support", href: "/contact" }}
    />
  );
}