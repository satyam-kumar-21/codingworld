import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://codingworld.in/sitemap.xml",
    host: "https://codingworld.in",
  };
}
