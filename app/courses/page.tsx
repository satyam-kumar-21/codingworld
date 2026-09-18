import type { Metadata } from "next";
import InfoPage from "../components/InfoPage";

export const metadata: Metadata = {
  title: "Coding Courses | Web Development, AI and Full-Stack Programs",
  description: "Explore Coding World courses for JavaScript, React, Next.js, full-stack web development, AI engineering, DSA, and system design.",
  keywords: ["coding courses", "full stack course", "React course", "Next.js course", "AI engineering", "DSA course"],
  alternates: { canonical: "/courses" },
};

export default function CoursesPage() {
  return (
    <InfoPage
      eyebrow="Coding World Courses"
      title="Choose a path. Build real developer skills."
      description="Follow practical learning programs designed to help you move from coding fundamentals to confident full-stack development and modern AI engineering."
      sections={[
        { title: "Full-Stack Web Development", body: "Build responsive interfaces, APIs, databases, authentication, and production-ready applications with modern JavaScript tools." },
        { title: "React and Next.js", body: "Learn component architecture, App Router patterns, Server Components, deployment, and high-performance frontend engineering." },
        { title: "AI Engineering", body: "Understand how to integrate AI models into useful products and combine intelligent workflows with reliable web applications." },
        { title: "DSA and System Design", body: "Practice algorithms, data structures, architecture, and technical interview problem solving with a clear, structured approach." },
      ]}
      cta={{ label: "Ask about a course", href: "/contact" }}
    />
  );
}