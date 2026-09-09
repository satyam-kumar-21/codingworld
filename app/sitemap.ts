import type { MetadataRoute } from "next";

const baseUrl = "https://codingworld.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/blog",
    "/contact",
    "/courses",
    "/faq",
    "/forgot-password",
    "/interview",
    "/learning",
    "/login",
    "/notes",
    "/pricing",
    "/privacy",
    "/practice",
    "/projects",
    "/refund",
    "/register",
    "/resources",
    "/roadmaps",
    "/search",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
