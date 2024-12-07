"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courseData } from "@/lib/course-data";
import Link from "next/link";

export function CourseList() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">コース案内</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courseData.map((course) => (
          <Card key={course.slug} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {course.icon}
                {course.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{course.shortDescription}</p>
              <Link href={`/courses/${course.slug}`}>
                <Button className="w-full">詳細を見る</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}