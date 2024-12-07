"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";
import Image from "next/image";

const teachers = [
  {
    name: "石井 哲",
    role: "塾長",
    image: "/teachers/teacher1.jpg",
    experience: "教職歴20年", 
    specialty: "数学・物理",
    message: "生徒一人一人の「わかった！」という瞬間を大切にしています。",
  },
  {
    name: "佐藤 美咲",
    role: "英語科主任",
    image: "/teachers/teacher2.jpg",
    experience: "教職歴12年",
    specialty: "英語・英会話",
    message: "英語を楽しく学べる環境づくりを心がけています。",
  },
  {
    name: "鈴木 一郎",
    role: "国語科主任",
    image: "/teachers/teacher3.jpg",
    experience: "教職歴18年",
    specialty: "国語・小論文",
    message: "読解力は全ての学習の基礎です。共に成長していきましょう。",
  },
  {
    name: "高橋 直子",
    role: "理科主任",
    image: "/teachers/teacher4.jpg",
    experience: "教職歴10年",
    specialty: "理科・実験指導",
    message: "実験を通じて科学の面白さを伝えていきたいと思います。",
  },
  {
    name: "田中 健一",
    role: "社会科主任",
    image: "/teachers/teacher5.jpg",
    experience: "教職歴14年",
    specialty: "社会・地理",
    message: "歴史や地理を身近に感じられる授業を心がけています。",
  },
  {
    name: "渡辺 智子",
    role: "進路指導主任",
    image: "/teachers/teacher6.jpg",
    experience: "教職歴16年",
    specialty: "進路指導・面接対策",
    message: "生徒の夢の実現に向けて全力でサポートします。",
  },
];

export function FacultySection() {
  return (
    <section className="py-20 bg-white" id="faculty">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Users className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-center">講師紹介</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teachers.map((teacher, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-6">
                <div className="text-center space-y-4">
                  <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <Image
                      src={teacher.image}
                      alt={teacher.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{teacher.name}</h3>
                    <p className="text-blue-600 font-medium mt-1">{teacher.role}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">{teacher.experience}</p>
                    <p className="text-gray-600 text-sm">{teacher.specialty}</p>
                  </div>
                  <p className="text-gray-700 text-sm italic border-t border-gray-100 pt-4 mt-4">
                    &quot;{teacher.message}&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}