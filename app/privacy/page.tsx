import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Coding World Privacy Policy",
  description: "Read the Coding World privacy policy and learn how information is handled across our coding education platform.",
  keywords: ["Coding World privacy policy", "data privacy", "online learning privacy"],
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="Privacy at Coding World"
      title="Your information deserves care and clarity."
      description="This placeholder privacy page explains the principles Coding World follows when handling information across our website, learning programs, and support conversations."
      sections={[
        { title: "Information we collect", body: "We may collect details you submit through account, course, callback, or contact forms so we can provide the requested service." },
        { title: "How information is used", body: "Information may be used to deliver learning services, respond to questions, improve the platform, and communicate relevant updates." },
        { title: "Your choices", body: "You can ask questions about your information, request updates, or contact our team about communication preferences." },
        { title: "Policy updates", body: "This page is a starter policy surface and will be replaced with the complete Coding World privacy policy before launch." },
      ]}
      cta={{ label: "Contact Coding World", href: "/contact" }}
    />
  );
}