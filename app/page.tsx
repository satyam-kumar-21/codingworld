import type { Metadata } from "next";
import HomeMain from "./components/Home/HomeMain";

export const metadata: Metadata = {
  title: "Coding World | Online Coding Courses, Web Development and AI Programs",
  description:
    "Learn JavaScript, React, Next.js, full-stack web development, AI engineering, data structures, and system design through practical Coding World programs.",
  keywords: [
    "online coding courses",
    "web development courses",
    "full stack coding bootcamp",
    "Next.js and React course",
    "AI engineering course",
    "data structures and algorithms course",
    "coding interview preparation",
  ],
  alternates: { canonical: "/" },
};

const Page = () => {
  return (
   <>
   <HomeMain />
   </>
  );
};

export default Page;