import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { baseMetadata } from "@/lib/seo";
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
  ...baseMetadata,
  title: {
    default: "Coding World | Learn to Code, Build Real Projects, Grow Your Career",
    template: "%s | Coding World",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050b14] text-slate-100">{children}</body>
    </html>
  );
}
