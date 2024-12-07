"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Star,
  BookOpen,
  GraduationCap,
  Trophy,
  Target,
  Users,
  School,
  Brain,
  BarChart2,
  Award,
  CheckCircle,
  Calendar,
  HelpCircle,
} from "lucide-react";

const faqs = [
  // 質問1
  {
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    question: "S-TOPコースって何ですか？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          中央と地方の教育格差の解消を目指すコースです。主な特徴：
        </p>
        <ul className="space-y-3">
          {[
            "中学段階から大学入試を見据えたカリキュラム構成",
            "中学段階で大学入試レベルの学力を養成",
            "首都圏一貫校の生徒と同等の学力を育成",
            "小6の12月から開始する本科コース",
            "個別対応型コースで途中参加も可能",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 text-blue-100"
            >
              <CheckCircle className="text-blue-400 w-5 h-5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    ),
  },
  // 質問2
  {
    icon: <Target className="w-8 h-8 text-blue-400" />,
    question: "S-TOPコースってどんな内容なの？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">S-TOPコースは4種類あります：</p>
        <ul className="space-y-3">
          {[
            "S-TOPコース（本科）　小6 12月スタート",
            "S-TOPコース（個別対応）　随時",
            "中3東進生　中3 8月スタート",
            "小学S-TOPコース　小4 4月スタート（学力次第で途中合流可能）",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 text-blue-100"
            >
              <CheckCircle className="text-blue-400 w-5 h-5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <p className="text-blue-100">
          ここでは「S-TOPコース（本科）」について説明します。
        </p>
        <div className="space-y-6 mt-4">
          {[
            {
              title: "第1段階",
              content:
                "「新中1スタートゼミ」として、冬期講習会、3学期の授業、春期講習会を通じて中1の9月までの進度を先取り学習します。",
            },
            {
              title: "第2段階",
              content:
                "4月以降は通常授業に加えて土曜日に先取り型の中高一貫型の授業を組み合わせて受講。この組み合わせが圧倒的な成績向上の鍵となっています。",
            },
            {
              title: "第3段階",
              content:
                "中2の秋頃には英語・数学ともに中学校内容の教科書レベルの学習が終了。その後は高校内容の学習へ移行し、習熟度に応じて映像授業またはライブ授業を選択します。",
            },
          ].map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 p-6 rounded-xl border border-blue-400/20"
            >
              <h4 className="font-bold text-xl mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                {stage.title}
              </h4>
              <p className="text-blue-100 leading-relaxed">{stage.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  // 質問3
  {
    icon: <Trophy className="w-8 h-8 text-blue-400" />,
    question: "東大・東北大など難関大へ続々合格って本当？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          2018～2024期間のS-TOP生OBの主な進路実績：
        </p>
        <ul className="space-y-3">
          {[
            "東京大学　6名",
            "京都大学　2名",
            "東京工業大学　2名",
            "東北大学　8名（医・医5名）",
            "弘前大学　18名（医・医13名）",
            "その他多数の国公立大学に合格",
          ].map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-2 text-blue-100"
            >
              <Award className="text-blue-400 w-5 h-5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
        <p className="text-blue-100">
          少人数のコースからこれだけの合格実績を出しており、なかなかの成果と言えます。
        </p>
      </div>
    ),
  },
  // 質問4
  {
    icon: <BarChart2 className="w-8 h-8 text-blue-400" />,
    question: "中3生の県内トップレベルはS-TOP生が過半数って本当？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          中3生は約2000名が参加する模擬試験を受験していますが、県のトップ10の半分以上をS-TOP生が占めることは珍しくありません。
        </p>
        <p className="text-blue-100">
          優秀者リストの20名のうち19名がS-TOP生であり、県内TOP10のうち5名、TOP20のうち10名がS-TOP生となっています。これは青森市や八戸市の上位者も含めた数字で、まさに上位独占と言えるでしょう。
        </p>
      </div>
    ),
  },
  // 質問5
  {
    icon: <Users className="w-8 h-8 text-blue-400" />,
    question: "トップ高校の上位者はS-TOP出身がほとんどって本当？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          テストの種類によっては本当です。特に模試では上位を独占することも。上位者だけでなく、ほとんどの生徒が上位に位置しています。
        </p>
        <p className="text-blue-100">
          学校の定期テストではさほどではありませんが、総合的な学力の高さが示されています。
        </p>
      </div>
    ),
  },
  // 質問6
  {
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    question: "S-TOPコースのトップ層は「開成・灘」レベルって本当？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          S-TOPコースの中でも特に優秀な生徒については「本当」です。全国規模の模試優秀者や全国統一高校生テスト決勝大会出場者、数学オリンピック本戦出場者、高1での英検1級取得者などの実績があります。
        </p>
        <p className="text-blue-100">
          これらの成果はS-TOPコース開講以前には不可能と思われていたものです。
        </p>
      </div>
    ),
  },
  // 質問7
  {
    icon: <Calendar className="w-8 h-8 text-blue-400" />,
    question: "S-TOP生は中3で大学受験レベルになるって本当？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          すべての生徒というわけではありませんが、本当です。約半数程度が大学受験レベルに達します。
        </p>
        <p className="text-blue-100">
          中学生で大学入試の模試において高得点を取得する生徒もおり、学年の1/2くらいが大学入試レベルまで達しています。
        </p>
      </div>
    ),
  },
  // 質問8
  {
    icon: <School className="w-8 h-8 text-blue-400" />,
    question: "中学の上位者はS-TOP生ばかりって本当？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          多数受講していただいている中学については「本当」です。定期試験での高得点者が多数おり、学年の第1位から第6位まで全員がS-TOP生ということもありました。
        </p>
      </div>
    ),
  },
  // 質問9
  {
    icon: <HelpCircle className="w-8 h-8 text-blue-400" />,
    question:
      "弘前高校進学者の5人に1人は高校の勉強をしてから入学しているって本当？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          正確な人数は不明ですが、S-TOP生に限らずトップゼミナール生は全員高校内容を学習した上で進学します。他の塾でも同様の取り組みがあるかもしれません。
        </p>
        <p className="text-blue-100">
          「高校の勉強」と一言で言っても様々なレベルがありますので、一概には答えられません。
        </p>
      </div>
    ),
  },
  // 質問10
  {
    icon: <Star className="w-8 h-8 text-blue-400" />,
    question: "今、中2ですが途中からの参加は可能ですか？",
    answer: (
      <div className="space-y-4">
        <p className="text-blue-100">
          S-TOPコース（本科）は小6の12月から始まるため、途中参加は特殊な場合に限られます。しかし、ご要望にお応えして「S-TOPコース（個別対応型）」を開講しています。比較的近い成果が期待できますので、ぜひお問い合わせください。
        </p>
      </div>
    ),
  },
];

export function FaqSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto space-y-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400 mb-12">
          よくある質問
        </h2>
        <div className="grid md:grid-cols-2 gap-6 sm:grid-cols-1">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gradient-to-br from-blue-900/80 to-blue-800/80 backdrop-blur-lg border border-blue-400/20 shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    {faq.icon}
                    <span className="text-xl text-blue-100">{faq.question}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>{faq.answer}</CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
