"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react"; // 'AcademicCap' を 'GraduationCap' に変更

const courseStructure = [
  {
    stage: "第1段階",
    name: "新中1スタートゼミ",
    period: "小6冬期〜春期",
    content: "中1の9月までの内容を先取り",
    icon: <GraduationCap className="w-6 h-6 text-blue-500" />, // アイコンを更新
  },
  {
    stage: "第2段階",
    name: "通常授業＋先取り学習",
    period: "中1〜中2",
    content: "思考力育成と発展学習の組み合わせ",
    icon: <BookOpen className="w-6 h-6 text-blue-500" />,
  },
  {
    stage: "第3段階",
    name: "高校内容学習",
    period: "中2秋以降",
    content: "習熟度別の学習方法選択",
    icon: <School className="w-6 h-6 text-blue-500" />,
  },
];

export function CourseStructureSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
          学習システム
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courseStructure.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/80 to-blue-800/80 backdrop-blur-lg border border-blue-400/20 rounded-3xl shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4 text-blue-300">{stage.icon}</div>
                  <div className="text-blue-300 font-bold mb-2">{stage.stage}</div>
                  <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-4">
                    {stage.name}
                  </h3>
                  <p className="text-blue-200 font-medium mb-2">{stage.period}</p>
                  <p className="text-blue-100">{stage.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
