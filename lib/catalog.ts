export type CatalogItem = {
  slug: string;
  title: string;
  category: string;
  description: string;
  detail: string;
  eyebrow: string;
  accent: string;
  tag: "Free" | "Premium";
};

export const courses: CatalogItem[] = [
  { slug: "javascript", title: "JavaScript Complete Course", category: "JavaScript", description: "Master the language behind the modern web with browser projects and async workflows.", detail: "A structured 42-lesson path covering fundamentals, DOM, async JavaScript, APIs, debugging, and portfolio projects.", eyebrow: "42 lessons · 8 weeks", accent: "#2564e5", tag: "Premium" },
  { slug: "react", title: "React.js Complete Course", category: "React", description: "Build scalable interfaces with modern React, hooks, routing, and state patterns.", detail: "Create production-ready React applications with component architecture, forms, data fetching, and performance patterns.", eyebrow: "39 lessons · 7 weeks", accent: "#06b6d4", tag: "Premium" },
  { slug: "node", title: "Node.js & Express", category: "Node.js", description: "Build secure APIs, connect databases, and deploy backend services with confidence.", detail: "Learn REST APIs, Express middleware, authentication, validation, testing, and deployment through practical builds.", eyebrow: "35 lessons · 6 weeks", accent: "#16a34a", tag: "Premium" },
  { slug: "nextjs", title: "Next.js Complete Course", category: "Next.js", description: "Ship fast full-stack apps with routing, server components, SEO, and deployment workflows.", detail: "Build a SaaS-style app from scratch using App Router, server actions, metadata, caching, and production deployment.", eyebrow: "41 lessons · 8 weeks", accent: "#0f172a", tag: "Premium" },
  { slug: "python", title: "Python Programming", category: "Python", description: "Build a reliable programming foundation for automation, data, and backend development.", detail: "A beginner-friendly track for syntax, functions, OOP, modules, automation, and small practical programs.", eyebrow: "28 lessons · 5 weeks", accent: "#eab308", tag: "Free" },
  { slug: "ai", title: "Generative AI for Developers", category: "AI", description: "Learn practical AI workflows, prompting, APIs, and product-minded implementation.", detail: "Understand LLM fundamentals, prompt patterns, API integration, evaluation, and responsible AI product design.", eyebrow: "31 lessons · 6 weeks", accent: "#9333ea", tag: "Premium" },
];

export const resources: CatalogItem[] = [
  { slug: "javascript-cheatsheet", title: "JavaScript Cheatsheet", category: "JavaScript", description: "Fast reference notes for syntax, arrays, objects, and async patterns.", detail: "A compact reference for everyday JavaScript work, from declarations through promises and fetch.", eyebrow: "PDF · 24 pages", accent: "#f59e0b", tag: "Free" },
  { slug: "react-patterns", title: "React Component Patterns", category: "React", description: "Reusable patterns for clean, flexible, maintainable React code.", detail: "A focused guide to composition, controlled components, custom hooks, and UI state boundaries.", eyebrow: "Guide · 48 pages", accent: "#06b6d4", tag: "Premium" },
  { slug: "ai-blueprint", title: "AI Workflow Blueprint", category: "AI", description: "A practical framework for designing useful AI features.", detail: "Map AI product ideas to prompts, tools, evaluation, human review, and responsible delivery.", eyebrow: "Bundle · 6 templates", accent: "#9333ea", tag: "Premium" },
];

export const notes: CatalogItem[] = [
  { slug: "javascript-notes", title: "JavaScript Notes", category: "JavaScript", description: "Topic-by-topic notes covering the language and browser APIs.", detail: "Variables, data types, functions, arrays, objects, DOM, events, promises, async/await, and fetch API.", eyebrow: "12 chapters", accent: "#f59e0b", tag: "Free" },
  { slug: "react-notes", title: "React Notes", category: "React", description: "Clear notes for hooks, routing, state management, and component design.", detail: "A concise React reference built for revision before projects, interviews, and production work.", eyebrow: "10 chapters", accent: "#06b6d4", tag: "Premium" },
  { slug: "node-notes", title: "Node.js Notes", category: "Node.js", description: "Backend concepts distilled into practical implementation notes.", detail: "Express, middleware, APIs, authentication, databases, error handling, and deployment notes.", eyebrow: "9 chapters", accent: "#16a34a", tag: "Premium" },
];

export const projects: CatalogItem[] = [
  { slug: "portfolio-website", title: "Portfolio Website", category: "HTML/CSS", description: "Create a polished personal site with responsive sections and a clear story.", detail: "Build a responsive portfolio with accessible components, visual hierarchy, a case-study section, and deployment.", eyebrow: "Beginner · 2 days", accent: "#f97316", tag: "Free" },
  { slug: "ecommerce-dashboard", title: "E-commerce Dashboard", category: "React", description: "Design an analytics dashboard with filters, charts, and useful product states.", detail: "Practice dashboard layout, data visualization, responsive tables, filters, and an admin-quality interface.", eyebrow: "Intermediate · 1 week", accent: "#06b6d4", tag: "Premium" },
  { slug: "ai-content-generator", title: "AI Content Generator", category: "AI", description: "Build a focused AI product with prompts, output states, and usage feedback.", detail: "Create a small AI tool with a thoughtful prompt workflow, loading states, history, and responsible UX.", eyebrow: "Advanced · 2 weeks", accent: "#9333ea", tag: "Premium" },
];

export const roadmaps: CatalogItem[] = [
  { slug: "frontend", title: "Frontend Developer", category: "Web Development", description: "From HTML and CSS to React, testing, accessibility, and shipping.", detail: "A practical frontend path: foundations, JavaScript, React, quality, performance, portfolio, and interviews.", eyebrow: "8 stages · 16 projects", accent: "#2564e5", tag: "Free" },
  { slug: "backend", title: "Backend Developer", category: "Backend", description: "Build APIs, work with databases, secure services, and deploy reliably.", detail: "Learn Node.js, databases, auth, testing, observability, and deployment through a sequence of backend builds.", eyebrow: "7 stages · 12 projects", accent: "#16a34a", tag: "Free" },
  { slug: "ai-engineer", title: "AI Engineer", category: "Artificial Intelligence", description: "Move from Python and data foundations into useful AI products.", detail: "A modern AI path covering Python, ML foundations, LLM APIs, evaluation, agents, and product delivery.", eyebrow: "9 stages · 10 projects", accent: "#9333ea", tag: "Premium" },
];

export function findItem(collection: CatalogItem[], slug: string) {
  return collection.find((item) => item.slug === slug) ?? collection[0];
}
