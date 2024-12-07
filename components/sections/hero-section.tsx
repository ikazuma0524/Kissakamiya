'use client';

import {
  GraduationCap,
  ChevronDown,
  Sparkles,
  Award,
  Users,
  Book,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export function HeroSection() {
  const scrollToNews = () => {
    const newsSection = document.getElementById('news');
    newsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    {
      value: 39,
      label: '弘前高校合格',
      subtext: '令和5年度入試実績',
      icon: Award,
      color: 'from-blue-400 to-blue-600',
    },
    {
      value: 25,
      label: '弘前大学教育学部附属中合格',
      subtext: '令和5年度入試実績',
      icon: Book,
      color: 'from-blue-500 to-blue-700',
    },
    {
      value: 30,
      label: '指導実績年数',
      subtext: '1992年創立',
      icon: Users,
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[180px] -top-96 -left-96"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] top-1/4 right-20"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] bg-blue-800/10 rounded-full blur-[200px] bottom-20 left-1/3"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          

          {/* Title */}
          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none"
            >
              <span className="text-transparent bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text">
                弘前トップ
              </span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text">
                ゼミナール
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="text-xl md:text-3xl text-blue-100 font-medium max-w-3xl mx-auto leading-relaxed"
            >
              弘前で最高の学習環境を提供するために
            </motion.p>
          </div>

          {/* Stats grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 + index * 0.3 }}
                  className="group p-8 bg-gradient-to-br from-blue-900/90 to-blue-950/90 rounded-2xl shadow-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-6xl font-black text-transparent bg-gradient-to-r from-blue-200 to-blue-400 bg-clip-text">
                      <CountUp end={stat.value} duration={2} />+
                    </div>
                    <div className="space-y-2">
                      <p className="text-xl text-white font-bold">
                        {stat.label}
                      </p>
                      <p className="text-sm text-blue-300">{stat.subtext}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Scroll button */}
          <Button
            onClick={scrollToNews}
            variant="ghost"
            className="mt-16 p-4 text-white hover:text-blue-300 hover:scale-110 hover:bg-blue-900/20 transition-all duration-300"
          >
            <ChevronDown className="w-10 h-10 animate-bounce" />
          </Button>
        </div>
      </div>
    </section>
  );
}
