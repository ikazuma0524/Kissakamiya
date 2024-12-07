"use client";

import { CourseList } from "@/components/courses/course-list";
import { FloatingNav } from "@/components/floating-nav";

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <FloatingNav />
      <div className="pt-24 pb-20">
        <CourseList />
      </div>
    </main>
  );
}