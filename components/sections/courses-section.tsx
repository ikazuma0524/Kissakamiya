"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function CoursesSection() {
  return (
    <section className="py-20 bg-white" id="courses">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-black">コース紹介</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              地方と中央の教育格差を解消し、生徒一人一人の目標に合わせた多彩なコースをご用意しています。
            </p>
          </div>

          {/* 各コース */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* S-TOPコース (変更なし) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/courses/stop">
                <Card className="bg-gradient-to-br from-blue-900 to-blue-800 text-white hover:shadow-2xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold">S-TOPコース</h3>
                    <p className="text-blue-100">
                      中学段階から大学入試を見据えた独自カリキュラムで、首都圏一貫校に引けを取らない学力を育成します。
                    </p>
                    <Button variant="secondary" size="lg" className="group-hover:bg-white group-hover:text-blue-900">
                      詳しく見る →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* 通常授業 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Link href="/courses/normal">
                <Card className="bg-white border border-gray-300 hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-black">通常授業</h3>
                    <p className="text-gray-700">
                      附属中入試に対応する基礎から応用までを学べるクラスです。
                    </p>
                    <Button className="w-full bg-black text-white hover:opacity-80">
                      詳細を見る
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* 土日附中入試コース */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/courses/weekend">
                <Card className="bg-white border border-gray-300 hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-black">土日附中入試コース</h3>
                    <p className="text-gray-700">
                      土日を利用して集中的に附属中入試対策を行うコースです。
                    </p>
                    <Button className="w-full bg-black text-white hover:opacity-80">
                      詳細を見る
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* 弘高特訓コース */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/courses/hirotoku">
                <Card className="bg-white border border-gray-300 hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-black">弘高特訓コース</h3>
                    <p className="text-gray-700">
                      弘前高校合格を目指すための特別カリキュラムを提供します。
                    </p>
                    <Button className="w-full bg-black text-white hover:opacity-80">
                      詳細を見る
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            {/* 中三受験対策コース */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/courses/junior-final">
                <Card className="bg-white border border-gray-300 hover:shadow-lg transition-transform hover:-translate-y-1 cursor-pointer">
                  <CardContent className="p-8 space-y-4">
                    <h3 className="text-2xl font-bold text-black">中三受験対策コース</h3>
                    <p className="text-gray-700">
                      中学3年生のための受験対策に特化したプログラムです。
                    </p>
                    <Button className="w-full bg-black text-white hover:opacity-80">
                      詳細を見る
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
