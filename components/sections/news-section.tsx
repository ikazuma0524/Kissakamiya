"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, BookOpen } from "lucide-react";

export function NewsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 tracking-wide">
          最新のお知らせ
        </h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Winter Course Card */}
          <Card className="shadow-lg transform hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                <Calendar className="w-6 h-6 text-blue-600" />
                2024年冬期講習会
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-blue-700 hover:text-blue-500 font-medium underline underline-offset-4 transition"
                  >
                    冬期講習会のご案内・お申込みフォーム
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-blue-700 hover:text-blue-500 font-medium underline underline-offset-4 transition"
                  >
                    弘高特訓・進学特訓コース２週間体験のご案内
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Top Exam Card */}
          <Card className="shadow-lg transform hover:scale-105 transition duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-gray-800">
                <BookOpen className="w-6 h-6 text-green-600" />
                第３回トップ定期試験
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  <strong>実施日程：</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-gray-700">中３生：11月9日（土）</li>
                  <li className="text-gray-700">中１、２生：11月16日（土）</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        
      </div>
    </section>
  );
}
