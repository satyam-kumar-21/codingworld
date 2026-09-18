import type { Metadata } from "next";
import { Geist_Mono, Manrope, Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codingworld.in"),
  title: {
    default: "Coding World | Learn Coding, Build Projects, Grow Your Career",
    template: "%s",
  },
  description:
    "Coding World helps beginners and developers learn web development, full-stack engineering, AI, and coding interview skills through practical courses and projects.",
  keywords: [
    "Coding World",
    "learn coding",
    "online coding courses",
    "web development course",
    "full stack development",
    "Next.js course",
    "JavaScript course",
    "AI engineering course",
    "coding bootcamp",
    "programming projects",
  ],
  applicationName: "Coding World",
  authors: [{ name: "Coding World" }],
  creator: "Coding World",
  publisher: "Coding World",
  alternates: { canonical: "/" },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    url: "https://codingworld.in",
    siteName: "Coding World",
    title: "Coding World | Learn Coding and Build Real Projects",
    description:
      "Practical coding courses, full-stack development programs, AI learning, and career-focused projects for modern developers.",
    images: [{ url: "/logo.png", width: 600, height: 160, alt: "Coding World" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coding World | Learn Coding and Build Real Projects",
    description: "Practical coding courses and career-focused developer programs.",
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050b14] text-slate-100">
        <Header />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://codingworld.in/#organization",
                  name: "Coding World",
                  url: "https://codingworld.in",
                  logo: "https://codingworld.in/logo.png",
                  description: "Practical coding education for modern developers.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://codingworld.in/#website",
                  url: "https://codingworld.in",
                  name: "Coding World",
                  publisher: { "@id": "https://codingworld.in/#organization" },
                },
                {
                  "@type": "ItemList",
                  "@id": "https://codingworld.in/#courses",
                  name: "Coding World Courses",
                  itemListElement: [
                    {
                      "@type": "Course",
                      position: 1,
                      name: "Full-Stack Web Development and AI Engineering",
                      description: "Learn production-ready web applications, backend architecture, DevOps, and AI integration.",
                      provider: { "@id": "https://codingworld.in/#organization" },
                      url: "https://codingworld.in/#courses",
                    },
                    {
                      "@type": "Course",
                      position: 2,
                      name: "Next.js and Modern Full-Stack Development",
                      description: "Master the Next.js App Router, Server Components, authentication, and high-performance deployment.",
                      provider: { "@id": "https://codingworld.in/#organization" },
                      url: "https://codingworld.in/#courses",
                    },
                    {
                      "@type": "Course",
                      position: 3,
                      name: "Data Structures, Algorithms, and System Design",
                      description: "Build problem-solving skills and prepare for technical coding interviews at leading technology companies.",
                      provider: { "@id": "https://codingworld.in/#organization" },
                      url: "https://codingworld.in/#courses",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
