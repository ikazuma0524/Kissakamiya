"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Trophy, GraduationCap, School, Users } from "lucide-react";

const results = {
  current: {
    year: "2024年度",
    achievements: [
      { name: "弘前大学教育学部附属中学校", count: 36, note: "※内部進学者と外部受験者の合算、外部受験者は12名合格" },
      { name: "弘前高校", count: 28 }
    ],
    university: [
      { name: "東京大学", department: "理科二類" },
      { name: "京都大学", department: "理学部" },
      { name: "東北大学", department: "医学部医学科" },
      { name: "東北大学", department: "理学部地球科学系" },
      { name: "東北大学", department: "経済学部（AOⅢ）" },
      { name: "東北大学", department: "経済学部" },
      { name: "秋田大学", department: "医学部医学科" },
      { name: "弘前大学", department: "医学部医学科（総合型）", count: 2 },
      { name: "弘前大学", department: "人文社会学部文化創生課程" },
      { name: "弘前大学", department: "人文社会学部社会経営課程" },
      { name: "千葉大学", department: "工学部総合工学科医工学コース" },
      { name: "千葉大学", department: "工学部総合工学科電気電子工学コース" },
      { name: "横浜国立大学", department: "理工学部数物電子情報系学科/電子情報システム教育プログラム" },
      { name: "横浜国立大学", department: "理工学部化学・生命系学科/化学教育プログラム・化学応用教育プログラム" }
    ]
  },
  previous: {
    year: "2023年度",
    achievements: [
      { name: "弘前大学教育学部附属中学校", count: 25, note: "※内部進学者と外部受験者の合算、外部受験者は14名合格" },
      { name: "弘前高校", count: 39 },
      { name: "弘前中央高校", count: 4 },
      { name: "弘前南高校", count: 4 }
    ]
  },
  cumulative: {
    period: "2018-2024年度",
    highlights: [
      { name: "東京大学", count: 6 },
      { name: "京都大学", count: 2 },
      { name: "東京工業大学", count: 2 },
      { name: "東北大学", count: 13, note: "（医学部医学科5名含む）" },
      { name: "弘前大学医学部医学科", count: 13 }
    ]
  }
};

export function ResultsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-gray-50" id="results">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12 max-w-6xl mx-auto"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold text-gray-800">合格実績</h2>
            <p className="text-lg text-gray-600">
              地域でトップクラスの進学実績を誇り、全国的な難関校にも合格者を輩出しています。
            </p>
          </div>

          {/* 最新の実績 */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg bg-gradient-to-tr from-blue-100 to-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-blue-700" />
                  {results.current.year}入試実績
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {results.current.achievements.map((achievement, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-semibold">{achievement.name}</span>
                      <span className="text-2xl font-bold text-blue-600">{achievement.count}名</span>
                      {achievement.note && (
                        <p className="text-sm text-gray-600">{achievement.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg bg-gradient-to-tr from-green-100 to-green-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-green-700" />
                  {results.previous.year}入試実績
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {results.previous.achievements.map((achievement, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="font-semibold">{achievement.name}</span>
                      <span className="text-2xl font-bold text-green-600">{achievement.count}名</span>
                      {achievement.note && (
                        <p className="text-sm text-gray-600">{achievement.note}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* 大学実績 */}
          <Card className="shadow-lg bg-gradient-to-br from-blue-800 to-blue-900 text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <School className="w-6 h-6 text-white" />
                {results.current.year}大学合格実績（国立大学）
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {results.current.university.map((uni, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold">{uni.name}</span>
                    <span className="text-sm">{uni.department}</span>
                    {uni.count && (
                      <span className="text-blue-200 text-sm">{uni.count}名合格</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* 累積実績 */}
          <Card className="shadow-lg bg-gray-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-blue-600" />
                {results.cumulative.period}累積実績
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {results.cumulative.highlights.map((highlight, index) => (
                  <li key={index} className="flex flex-col">
                    <span className="font-semibold">{highlight.name}</span>
                    <span className="text-2xl font-bold text-blue-600">{highlight.count}名</span>
                    {highlight.note && (
                      <p className="text-sm text-gray-600">{highlight.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
