import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Contact Coding World | Course and Support Enquiries",
  description: "Contact Coding World for coding course enquiries, bootcamp information, support, partnerships, and learning guidance.",
  keywords: ["contact Coding World", "coding course enquiry", "coding bootcamp contact", "developer learning support"],
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="Contact Coding World"
      title="Let’s talk about your next build."
      description="Have a course question, need support, or want to discuss a partnership? Reach out and the Coding World team will help you find the right next step."
      sections={[
        { title: "Course enquiries", body: "Ask about upcoming programs, course topics, schedules, learning formats, and what path fits your current goals." },
        { title: "Learner support", body: "Need help with your account or learning experience? Include your registered details and a short description of the issue." },
        { title: "Partnerships", body: "We welcome conversations about creator collaborations, hiring initiatives, communities, and technology education partnerships." },
        { title: "Email us", body: "Send a message to hello@codingworld.in and we will route your enquiry to the appropriate team." },
      ]}
      cta={{ label: "Email Coding World", href: "mailto:hello@codingworld.in" }}
    />
  );
}