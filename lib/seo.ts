import type { Metadata } from "next";

export const siteUrl = "https://codingworld.in";
export const siteName = "Coding World";
export const defaultDescription =
  "Coding World is a premium LMS platform for coding courses, roadmaps, interview prep, notes, AI learning, and project-based education for developers.";

export const defaultKeywords = [
  "coding courses",
  "learn coding",
  "web development course",
  "React course",
  "Next.js course",
  "JavaScript course",
  "Node.js course",
  "AI for developers",
  "programming roadmap",
  "coding interview prep",
  "developer notes",
  "full stack learning",
  "Coding World",
];

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = defaultKeywords,
}: {
  title: string;
  description?: string;
  path?: string;
  keywords?: string[];
}): Metadata {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = new URL(normalizedPath, siteUrl).toString();

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    metadataBase: new URL(siteUrl),
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName,
      locale: "en_IN",
      type: "website",
      images: [{ url: "/logo.png", width: 1200, height: 630, alt: `${siteName} logo` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/logo.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | Learn to Code, Build Real Projects, Grow Your Career`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: `${siteName} | Learn to Code, Build Real Projects, Grow Your Career`,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "en_IN",
    type: "website",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: `${siteName} logo` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Learn to Code, Build Real Projects, Grow Your Career`,
    description: defaultDescription,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
