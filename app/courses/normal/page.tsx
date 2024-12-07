// app/courses/normal/page.tsx
"use client";

import { FloatingNav } from "@/components/floating-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, School, BookOpen, Calculator } from "lucide-react";

export default function NormalCoursePage() {
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
              <h1 className="text-4xl font-bold">通常授業</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                小学生は附属中学校など中学入試対策を、中学生は高校受験対策を中心に行います。
                それぞれの目標に合わせた確かな学力を育成します。
              </p>
            </motion.div>

            {/* コース選択 */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* 小学生コース */}
              <Link href="/courses/normal/elementary">
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <BookOpen className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold">小学生コース</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        附属中学校など中学入試対策を中心に行います。入試を受験しない方も学力向上のために受講できます。
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 受験クラス（附属中入試対応）</li>
                        <li>• ハイレベル算数（上位合格・私立中対応）</li>
                        <li>• NEW eドリル付き</li>
                      </ul>
                    </div>
                    <Button className="w-full mt-4">詳しく見る</Button>
                  </CardContent>
                </Card>
              </Link>

              {/* 中学生コース */}
              <Link href="/courses/normal/junior-high">
                <Card className="hover:shadow-lg transition-all cursor-pointer h-full">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg">
                        <School className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold"> 中学生コース</h3>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        主に学校の高校受験対策を行います。附属中クラスでは習熟度別のレベル設定があります。
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        <li>• 附属中クラス（トップ・ハイレベル・スタンダード）</li>
                        <li>• 英語・数学は習熟度別クラス</li>
                        <li>• 市立中生はスタディぷらすで受講</li>
                      </ul>
                    </div>
                    <Button className="w-full mt-4">詳しく見る</Button>
                  </CardContent>
                </Card>
              </Link>
            </div>

            {/* 青森県立高校入試制度の説明 */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                  青森県立高校の入試制度
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-700">
                  生徒の多くは、弘前高校・中央高校・南高校の県立高校を第一志望としています。
                  その希望を叶えるためには、まず、青森県立高校入試の制度をよく知る必要があります。
                </p>

                <div className="bg-white rounded-lg p-6 space-y-4">
                  <h4 className="font-bold">評価ポイント</h4>
                  <ol className="list-decimal list-inside space-y-2">
                    <li>入試当日の学力点 ⇒ 受験者内での順位</li>
                    <li>調査書の評定・特別活動の記録（いわゆる内申点）・面接 ⇒ 点数化した受験者内での順位</li>
                  </ol>
                  <p className="text-sm text-gray-600">
                    １，２どちらも入学定員内にあれば合格が（ほぼ）確定します。高校ごとに多少扱いに差がありますが、おおむね同様です。
                  </p>
                </div>

                <div className="prose prose-blue max-w-none">
                  <p>
                    入試当日の学力点も大事ですが、評定はさらに大事になります。なぜなら、評定がよくなければ第一志望校に出願しても、
                    合格の可能性が著しく低くなるからです。
                  </p>
                  <p>
                    当然のことですが、高校受験は普段の成績をできるだけ向上させた上で、当日の学力点を引き上げることが最も効率のいい方法となります。
                    私たちは、この点において優れたシステムを作り上げ、改善を繰り返しています。
                  </p>
                </div>
              </CardContent>
            </Card>

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
