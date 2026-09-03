import { notFound } from "next/navigation";
import CourseDetail from "@/components/course-detail";
import { courses } from "@/lib/catalog";

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  return <CourseDetail course={course} />;
}
