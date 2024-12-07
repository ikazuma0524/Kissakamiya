"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Youtube, GraduationCap, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f202f] via-[#0a1824] to-[#0b1821] pt-32 pb-20 text-gray-100 overflow-hidden">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 背景用の淡いグラデーションと発光エフェクト */}
        <div 
          className="absolute w-[900px] h-[900px] rounded-full blur-[200px] -top-[300px] -left-[300px] animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(32, 175, 255, 0.15) 0%, rgba(0, 50, 100, 0.05) 100%)' }}
        />
        <div 
          className="absolute w-[700px] h-[700px] rounded-full blur-[180px] top-1/3 right-20 animate-pulse duration-[5000ms]"
          style={{ background: 'radial-gradient(circle, rgba(0, 200, 255, 0.2) 0%, rgba(0, 100, 200, 0.1) 100%)' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          {/* YouTube案内 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-600/30 to-blue-600/30 text-white shadow-lg backdrop-blur-sm border border-cyan-400/20 hover:scale-105 transition-all cursor-pointer"
          >
            <Youtube className="w-5 h-5" />
            <span className="font-medium drop-shadow-md">S-TOPコースの詳細動画を公開中</span>
          </motion.div>

          {/* メインタイトル */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold tracking-tight drop-shadow-lg"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300">
                S-TOP
              </span>
              <span className="text-white">コース</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed drop-shadow-sm"
            >
              地方と中央の教育格差を解消し、
              <br className="hidden md:inline" />
              <span className="text-white font-medium">最難関大学への道</span>
              を切り拓く革新的教育プログラム
            </motion.p>
          </div>

          {/* 3つの柱 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "教育格差の解消",
                description: "中学段階から大学入試を見据えた独自カリキュラムで、首都圏一貫校に引けを取らない学力を育成"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "最難関大への挑戦",
                description: "東大・京大などの最難関大学合格を実現する、中3までに完成させる超高学力プログラム"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "弘前高校での成功",
                description: "入学前から大学入試レベルの実力を養成し、学年上位での安定的な成績を実現"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="bg-white/10 backdrop-blur-md border-none hover:bg-white/20 transition-all group shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-cyan-600/20 rounded-xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 drop-shadow-md text-white">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* 目標表示 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid md:grid-cols-2 gap-6 pt-8"
          >
            {[
              {
                title: "中3生の第1目標",
                description: "高校入学までに数学、英語を",
                highlight: "大学入試レベルへ！"
              },
              {
                title: "中3生の第2目標",
                description: "弘前高校進学後も",
                highlight: "学年上位層で安定！"
              }
            ].map((goal, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-md border-none hover:opacity-90 transition-all shadow-xl"
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-md">{goal.title}</h3>
                  <p className="text-lg text-gray-100">
                    {goal.description}
                    <span className="block text-xl font-semibold text-white mt-3 drop-shadow-sm">
                      {goal.highlight}
                    </span>
                  </p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
