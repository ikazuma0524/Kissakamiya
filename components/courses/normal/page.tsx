"use client";

import { FloatingNav } from "@/components/floating-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, Calculator, School, Clock } from "lucide-react";

const scheduleData = {
  regular: {
    grade4: [
      { day: "木", subject: "算数", time: "16:30~17:50", location: "本部1-2" },
      { day: "金", subject: "国語", time: "16:30~17:50", location: "本部1-2" },
    ],
    grade5: [
      { day: "火", subject: "理/社", time: "18:00~19:20", location: "本部1-2" },
      { day: "木", subject: "国語", time: "18:00~19:20", location: "本部1-1" },
      { day: "金", subject: "算数", time: "18:00~19:20", location: "本部1-2" },
    ],
    grade6: [
      { day: "火", subject: "理/社", time: "18:00~19:20", location: "本部1-1" },
      { day: "木", subject: "算数", time: "18:00~19:20", location: "本部1-2" },
      { day: "金", subject: "国語", time: "18:00~19:20", location: "本部1-1" },
    ]
  },
  highlevel: {
    grade4: [{ day: "木", subject: "算数", time: "16:30~17:50", location: "本部1-3" }],
    grade5: [{ day: "金", subject: "算数", time: "18:00~19:20", location: "本部1-3" }],
    grade6: [{ day: "木", subject: "算数", time: "18:00~19:20", location: "本部1-3" }]
  }
};

const fees = {
  basic: [
    { name: "入会金（入会時のみ）", amount: "12,000円", taxIncluded: "13,200円" },
    { name: "事務処理費（12ヵ月毎/４月末引落)", amount: "1,800円", taxIncluded: "1,980円" },
    { name: "冷房費（夏季(7~9月)一括/6月末引落）", amount: "3,000円", taxIncluded: "3,300円" },
    { name: "暖房費（冬季(11~3月)一括/10月末引落）", amount: "5,000円", taxIncluded: "5,500円" },
    { name: "教材費(一律)（6ヵ月毎/3,9月末引落）", amount: "6,000円", taxIncluded: "6,600円" },
  ],
  tuition: [
    { lessons: "週1講(80分×1)", amount: "6,000円", taxIncluded: "6,600円" },
    { lessons: "週2講(80分×2)", amount: "11,000円", taxIncluded: "12,100円", perLesson: "（5,500円/講）" },
    { lessons: "週3講(80分×3)", amount: "15,000円", taxIncluded: "16,500円", perLesson: "（5,000円/講）" },
    { lessons: "週4講(80分×4)", amount: "18,000円", taxIncluded: "19,800円", perLesson: "（4,500円/講）" },
    { lessons: "週5講(80分×5)", amount: "20,000円", taxIncluded: "22,000円", perLesson: "（4,000円/講）" },
  ],
  tests: [
    { grade: "小5", name: "附中入試公開テスト(夏,冬)", amount: "1,818円", taxIncluded: "2,000円" },
    { grade: "小6", name: "附中入試公開テスト(第1~6回)・レベルアップテスト(冬)", amount: "6,364円", taxIncluded: "7,000円" },
  ]
};

export default function ElementaryCoursePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <FloatingNav />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* ヒーローセクション */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center space-y-6"
            >
              <h1 className="text-4xl font-bold">小学生通常授業</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                附属中入試に対応できる学力を育成する「受験クラス」と、
                より高度な応用力を養成する「ハイレベル算数」で、
                確かな学力を身につけます。
              </p>
            </motion.div>

            {/* コース概要 */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    受験クラス
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>附属中入試に対応できる程度の学力修得を目的とした上位者向けのクラス。</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      <li>基本から教科書の応用問題よりさらに難しい問題まで取り扱います</li>
                      <li>算数、国語または理科/社会を受講されますと、NEW eドリルのアカウントが自動的に付与</li>
                      <li>週1講(1教科)から受講可能</li>
                      <li>全小学校合同のクラス</li>
                      <li>1講80分の授業（途中5〜10分程度の小休止あり）</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-blue-600" />
                    ハイレベル算数
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>附中上位合格・県外私立中学入試レベルの応用力を養成し、全国規模の学力テストで&quot;都市部の子に負けない&quot;学力(市内上位3％)を目指す最上位者のためのクラス。</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-600">
                      <li>都市部の中堅私立中入試レベルの問題を取り扱います</li>
                      <li>学校での学習時期とは関係なく進んでいきます</li>
                      <li>先取り学習を目的としたクラスではありません</li>
                      <li>全小学校合同のクラス</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 時間割セクション */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold">時間割</h2>
              
              {/* 受験クラス */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-blue-800">受験クラス</h3>
                {Object.entries(scheduleData.regular).map(([grade, schedules]) => (
                  <Card key={grade}>
                    <CardHeader>
                      <CardTitle>{grade.replace('grade', '')}年生</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 text-left">曜日</th>
                              <th className="px-4 py-2 text-left">科目</th>
                              <th className="px-4 py-2 text-left">時間帯</th>
                              <th className="px-4 py-2 text-left">会場</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {schedules.map((schedule, index) => (
                              <tr key={index}>
                                <td className="px-4 py-2">{schedule.day}</td>
                                <td className="px-4 py-2">{schedule.subject}</td>
                                <td className="px-4 py-2">{schedule.time}</td>
                                <td className="px-4 py-2">{schedule.location}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* ハイレベル算数 */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-blue-800">ハイレベル算数</h3>
                {Object.entries(scheduleData.highlevel).map(([grade, schedules]) => (
                  <Card key={grade}>
                    <CardHeader>
                      <CardTitle>{grade.replace('grade', '')}年生</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead>
                            <tr>
                              <th className="px-4 py-2 text-left">曜日</th>
                              <th className="px-4 py-2 text-left">科目</th>
                              <th className="px-4 py-2 text-left">時間帯</th>
                              <th className="px-4 py-2 text-left">会場</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200">
                            {schedules.map((schedule, index) => (
                              <tr key={index}>
                                <td className="px-4 py-2">{schedule.day}</td>
                                <td className="px-4 py-2">{schedule.subject}</td>
                                <td className="px-4 py-2">{schedule.time}</td>
                                <td className="px-4 py-2">{schedule.location}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 費用セクション */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold">費用一覧</h2>
              
              {/* 基本費用 */}
              <Card>
                <CardHeader>
                  <CardTitle>基本費用</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fees.basic.map((fee, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b">
                        <span>{fee.name}</span>
                        <div className="text-right">
                          <span className="font-bold">{fee.amount}</span>
                          <span className="text-sm text-gray-500 ml-2">(税込{fee.taxIncluded})</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* テスト代 */}
              <Card>
                <CardHeader>
                  <CardTitle>テスト代（成績処理手数料）</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fees.tests.map((fee, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b">
                        <div>
                          <span className="font-medium">{fee.grade}</span>
                          <span className="ml-4">{fee.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-bold">{fee.amount}円</span>
                          <span className="text-sm text-gray-500 ml-2">(税込{fee.taxIncluded}円)</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 授業料 */}
              <Card>
                <CardHeader>
                  <CardTitle>授業料（月額）</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {fees.tuition.map((fee, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b">
                        <span>{fee.lessons}</span>
                        <div className="text-right">
                          <span className="font-bold">{fee.amount}</span>
                          <span className="text-sm text-gray-500 ml-2">(税込{fee.taxIncluded})</span>
                          {fee.perLesson && (
                            <span className="text-sm text-gray-500 block">{fee.perLesson}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* 注意事項 */}
            <section>
              <Card className="bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">重要事項</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 小学生対象の算数、国語、理社を受講されますと、NEW eドリルのアカウントが自動的に付与されます</li>
                    <li>• アカウントの費用は教材費に含まれています</li>
                    <li>• 各クラスは定員となり次第、申し込みを締め切らせていただくことがあります</li>
                    <li>• 基本的に、次学年へ進級しても各科目の曜日は変わりません</li>
                    <li>• 小6〜小4は1講80分の授業です（途中5〜10分程度の小休止を挟みます）</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* お問い合わせボタン */}
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                お問い合わせ・お申し込みはこちら
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
