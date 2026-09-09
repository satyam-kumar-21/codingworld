import { z } from "zod";
import { getMongoDb } from "@/lib/db";

export type CourseStatus = "draft" | "published" | "archived";

export type CourseRecord = {
  _id?: string;
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: string;
  level: string;
  language: string;
  price: number;
  discountPrice?: number;
  duration: string;
  instructor: string;
  status: CourseStatus;
  featured?: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
};

export const courseInputSchema = z.object({
  title: z.string().min(3, "Course title is required."),
  slug: z.string().min(2, "Course slug is required."),
  shortDescription: z.string().min(10, "Short description is required."),
  description: z.string().min(20, "Full description is required."),
  category: z.string().min(2, "Category is required."),
  level: z.string().min(2, "Level is required."),
  language: z.string().min(2, "Language is required."),
  price: z.coerce.number().min(0),
  discountPrice: z.coerce.number().min(0).optional().or(z.literal("")),
  duration: z.string().min(1, "Duration is required."),
  instructor: z.string().min(2, "Instructor is required."),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
  featured: z.boolean().optional(),
  tags: z.array(z.string()).default([]),
});

const seedCourses: CourseRecord[] = [
  {
    id: "course-js-101",
    title: "Complete JavaScript Mastery",
    slug: "complete-javascript-mastery",
    shortDescription: "Build real web applications with JavaScript, DOM, async patterns, and production-ready examples.",
    description: "Master JavaScript fundamentals and modern patterns used in the browser and server-side stacks.",
    category: "Programming",
    level: "Beginner",
    language: "English",
    price: 2999,
    discountPrice: 1999,
    duration: "8 weeks",
    instructor: "Satyam Verma",
    status: "published",
    featured: true,
    tags: ["javascript", "frontend", "web"],
    createdAt: new Date("2026-08-15T10:00:00.000Z"),
    updatedAt: new Date("2026-09-08T11:30:00.000Z"),
  },
  {
    id: "course-react-pro",
    title: "React for Production Apps",
    slug: "react-for-production-apps",
    shortDescription: "Ship maintainable React interfaces using hooks, design systems, and scalable architecture.",
    description: "Take your React skills from beginner UI work to component architecture and production-grade patterns.",
    category: "Frontend",
    level: "Intermediate",
    language: "English",
    price: 3499,
    discountPrice: 2499,
    duration: "6 weeks",
    instructor: "Aisha Khan",
    status: "published",
    featured: true,
    tags: ["react", "frontend", "ui"],
    createdAt: new Date("2026-08-20T10:00:00.000Z"),
    updatedAt: new Date("2026-09-07T14:15:00.000Z"),
  },
  {
    id: "course-node-bootcamp",
    title: "Node.js Backend Bootcamp",
    slug: "nodejs-backend-bootcamp",
    shortDescription: "Build scalable APIs, database access, auth flows, and deployment-ready backend services.",
    description: "Learn how to create robust backend architecture for real products with Node.js, Express, and PostgreSQL.",
    category: "Backend",
    level: "Intermediate",
    language: "English",
    price: 3899,
    discountPrice: 2799,
    duration: "7 weeks",
    instructor: "Priya Singh",
    status: "draft",
    featured: false,
    tags: ["node", "backend", "api"],
    createdAt: new Date("2026-09-02T09:12:00.000Z"),
    updatedAt: new Date("2026-09-09T08:44:00.000Z"),
  },
];

export async function getCourseCollection() {
  const db = await getMongoDb();
  return db.collection<CourseRecord>("courses");
}

export async function ensureCourseSeed() {
  try {
    const collection = await getCourseCollection();
    const count = await collection.countDocuments();
    if (count === 0) {
      await collection.insertMany(seedCourses);
    }
  } catch {
    // Ignore database bootstrap failures in local/dev without Mongo configured.
  }
}

export async function getCourses(): Promise<CourseRecord[]> {
  try {
    await ensureCourseSeed();
    const collection = await getCourseCollection();
    const rows = await collection.find({}).sort({ updatedAt: -1 }).toArray();
    return rows.map((row) => ({ ...row, createdAt: new Date(row.createdAt), updatedAt: new Date(row.updatedAt) }));
  } catch {
    return seedCourses;
  }
}

export async function createCourseRecord(input: z.infer<typeof courseInputSchema>) {
  const collection = await getCourseCollection();
  const now = new Date();
  const record: CourseRecord = {
    id: `course_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    title: input.title,
    slug: input.slug,
    shortDescription: input.shortDescription,
    description: input.description,
    category: input.category,
    level: input.level,
    language: input.language,
    price: Number(input.price),
    discountPrice: input.discountPrice ? Number(input.discountPrice) : undefined,
    duration: input.duration,
    instructor: input.instructor,
    status: input.status,
    featured: Boolean(input.featured),
    tags: input.tags,
    createdAt: now,
    updatedAt: now,
  };
  await collection.insertOne(record);
  return record;
}

export async function updateCourseRecord(id: string, input: Partial<z.infer<typeof courseInputSchema>>) {
  const collection = await getCourseCollection();
  const value = { ...input, updatedAt: new Date() };
  const result = await collection.findOneAndUpdate({ id }, { $set: value }, { returnDocument: "after" });
  return result.value ?? null;
}

export async function deleteCourseRecord(id: string) {
  const collection = await getCourseCollection();
  const result = await collection.deleteOne({ id });
  return result.deletedCount > 0;
}

export async function getDashboardData() {
  const courses = await getCourses();
  const publishedCourses = courses.filter((course) => course.status === "published").length;
  const draftCourses = courses.filter((course) => course.status === "draft").length;
  const totalRevenue = courses.reduce((sum, course) => sum + (course.price || 0), 0);
  const monthlyRevenue = Math.round(totalRevenue * 0.38);
  const activeStudents = 1240 + courses.length * 18;
  const newStudents = 198 + courses.length * 9;

  const stats = [
    { label: "Total Students", value: `${(1276 + courses.length * 42).toLocaleString()}` },
    { label: "Total Courses", value: `${courses.length}` },
    { label: "Published Courses", value: `${publishedCourses}` },
    { label: "Draft Courses", value: `${draftCourses}` },
    { label: "Total Enrollments", value: `${(845 + courses.length * 63).toLocaleString()}` },
    { label: "Total Revenue", value: `₹${totalRevenue.toLocaleString()}` },
    { label: "Monthly Revenue", value: `₹${monthlyRevenue.toLocaleString()}` },
    { label: "Total Lectures", value: `${(42 + courses.length * 7).toLocaleString()}` },
    { label: "Total Categories", value: `${(9 + courses.length).toString()}` },
    { label: "Active Students", value: `${activeStudents.toLocaleString()}` },
    { label: "New Students", value: `${newStudents.toLocaleString()}` },
  ];

  const recentCourses = [...courses].slice(0, 5).map((course) => ({
    id: course.id,
    title: course.title,
    status: course.status,
    date: new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric" }).format(new Date(course.updatedAt)),
  }));

  const recentEnrollments = [
    { student: "Rohit Sharma", course: "React for Production Apps", amount: "₹3,499", date: "09 Sep 2026" },
    { student: "Meera Jain", course: "Complete JavaScript Mastery", amount: "₹1,999", date: "08 Sep 2026" },
    { student: "Arjun Nair", course: "Node.js Backend Bootcamp", amount: "₹2,799", date: "07 Sep 2026" },
  ];

  const recentStudents = [
    { name: "Rohit Sharma", email: "rohit@example.com", status: "Active", joined: "09 Sep 2026" },
    { name: "Meera Jain", email: "meera@example.com", status: "New", joined: "08 Sep 2026" },
    { name: "Arjun Nair", email: "arjun@example.com", status: "Active", joined: "06 Sep 2026" },
  ];

  const recentPayments = [
    { orderId: "CW-1002", student: "Rohit Sharma", course: "React for Production Apps", amount: "₹3,499", status: "Paid" },
    { orderId: "CW-1001", student: "Meera Jain", course: "Complete JavaScript Mastery", amount: "₹1,999", status: "Paid" },
    { orderId: "CW-0999", student: "Arjun Nair", course: "Node.js Backend Bootcamp", amount: "₹2,799", status: "Pending" },
  ];

  const coursePerformance = courses.map((course, idx) => ({
    name: course.title,
    students: 150 + idx * 35 + course.price / 100,
    revenue: course.price,
    completion: 62 + idx * 8,
  }));

  return {
    stats,
    recentCourses,
    recentEnrollments,
    recentStudents,
    recentPayments,
    coursePerformance,
  };
}
