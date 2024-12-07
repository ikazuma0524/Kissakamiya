"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#1e40af", "#3b82f6", "#60a5fa", "#93c5fd", "#bfdbfe"];

const currentResults = [
  { name: "東京大学", count: 2 },
  { name: "京都大学", count: 1 },
  { name: "東北大学", count: 4 },
  { name: "東北大医学部医学科", count: 1 },
  { name: "弘前大学医学部医学科", count: 2 },
  { name: "秋田大学医学部医学科", count: 1 },
];

const cumulativeResults = [
  { name: "東京大学", count: 6 },
  { name: "京都大学", count: 2 },
  { name: "東京工業大学", count: 2 },
  { name: "東北大学（医学部医学科5名含む）", count: 13 },
  { name: "弘前大学医学部医学科", count: 13 },
];

export function ResultsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 text-gray-900">
      <div className="max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800">
          合格実績
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* 2024年度 合格実績 */}
          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">
                2024年度 合格実績
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={currentResults}
                      dataKey="count"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      label
                      labelLine={false}
                    >
                      {currentResults.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#f0f4f8",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#1e40af", fontWeight: "bold" }}
                      itemStyle={{ color: "#1e40af" }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-gray-700 text-center">
                東京大学: 2名、京都大学: 1名、東北大学: 4名、東北大医学部医学科: 1名、弘前大学医学部医学科: 2名、秋田大学医学部医学科: 1名
              </p>
            </CardContent>
          </Card>

          {/* 2018-2024年度 累積実績 */}
          <Card className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-blue-700">
                2018-2024年度 累積実績
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer>
                  <BarChart data={cumulativeResults} layout="vertical" margin={{ left: 100 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
                    <XAxis type="number" stroke="#1e40af" />
                    <YAxis type="category" dataKey="name" stroke="#1e40af" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#f0f4f8",
                        border: "none",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#1e40af", fontWeight: "bold" }}
                      itemStyle={{ color: "#1e40af" }}
                    />
                    <Bar dataKey="count" fill="#3b82f6" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 圧倒的かつ革新的な成果の強調セクション */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            圧倒的かつ革新的な成果
          </h3>
          <p className="text-white text-lg leading-relaxed mb-6 text-center">
            私たちのS-TOPコースは、東大、京大、旧帝大医学部といった日本を代表する超難関大学への合格者を多数輩出しています。この圧倒的な実績は、革新的な先取りプログラムが功を奏しています。
          </p>
          <p className="text-white text-lg leading-relaxed text-center">
            東大や京大、旧帝大医学部への合格者数は年々増加しており、地域を問わず多くの優秀な学生が私たちの指導のもとで夢を実現しています。この成果は、私たちの教育理念と取り組みの賜物であり、今後も更なる高みを目指して邁進していきます。
          </p>
        </div>
      </div>
    </section>
  );
}
