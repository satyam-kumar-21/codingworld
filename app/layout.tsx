import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coding World | Learn to Code, Build Real Projects, Grow Your Career",
  description:
    "Coding World is a premium LMS platform for programming, web development, AI, roadmaps, interview prep, notes, and real-world project learning.",
  metadataBase: new URL("https://codingworld.in"),
  openGraph: {
    title: "Coding World",
    description:
      "Learn to code. Build real projects. Grow your career with premium coding education, notes, roadmaps, and career preparation resources.",
    url: "https://codingworld.in",
    siteName: "Coding World",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding World",
    description:
      "Learn to code. Build real projects. Grow your career with premium coding education, notes, roadmaps, and career preparation resources.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-50 text-slate-900">{children}</body>
    </html>
  );
}
