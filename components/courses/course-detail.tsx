"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Users, Target } from "lucide-react";
import Link from "next/link";
import type { Course } from "@/lib/course-data";

interface CourseDetailProps {
  course: Course;
}

export function CourseDetail({ course }: CourseDetailProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <Link href="/courses">
          <Button variant="ghost" className="mb-6">
            ← コース一覧に戻る
          </Button>
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            {course.icon}
            <h1 className="text-3xl font-bold">{course.title}</h1>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">{course.description}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">授業時間</h3>
                </div>
                <p>{course.schedule}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">対象学年</h3>
                </div>
                <p>{course.targetGrades}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-600" />
                  <h3 className="font-semibold">目標</h3>
                </div>
                <p>{course.goal}</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">コースの特徴</h2>
            <ul className="space-y-3">
              {course.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}