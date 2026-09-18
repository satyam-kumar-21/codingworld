import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
  metadataBase: new URL("https://codingworld.in"),
  title: {
    default: "Coding World | Learn Coding, Build Projects, Grow Your Career",
    template: "%s | Coding World",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
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
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
