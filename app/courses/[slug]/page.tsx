import { CourseDetail } from "@/components/courses/course-detail";
import { FloatingNav } from "@/components/floating-nav";
import { courseData } from "@/lib/course-data";

export function generateStaticParams() {
  return courseData.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const course = courseData.find((c) => c.slug === params.slug);

  if (!course) {
    return <div>コースが見つかりません</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <FloatingNav />
      <div className="pt-24 pb-20">
        <CourseDetail course={course} />
      </div>
    </main>
  );
}