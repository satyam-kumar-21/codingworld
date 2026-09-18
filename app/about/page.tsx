import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Coding World About Us | Practical Coding Education",
  description: "Learn how Coding World helps aspiring developers build practical programming, web development, and AI engineering skills.",
  keywords: ["about Coding World", "coding education", "developer learning platform", "programming community"],
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="About Coding World"
      title="Learn coding skills that move your career forward."
      description="Coding World is a practical learning platform for developers who want to understand modern technology, build real projects, and grow with a supportive coding community."
      sections={[
        { title: "Learn by building", body: "Our learning paths focus on hands-on coding, production-minded projects, and the problem-solving habits developers use every day." },
        { title: "Modern technology", body: "Explore JavaScript, React, Next.js, backend engineering, databases, AI workflows, and the tools used by today’s development teams." },
        { title: "Career focused", body: "Strengthen your portfolio, technical confidence, interview preparation, and ability to communicate your engineering decisions." },
        { title: "A developer community", body: "Learn alongside ambitious students and creators through clear lessons, practical resources, and shared progress." },
      ]}
      cta={{ label: "Explore courses", href: "/courses" }}
    />
  );
}