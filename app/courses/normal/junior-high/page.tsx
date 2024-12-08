"use client";

import { FloatingNav } from "@/components/floating-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// 時間割のデータ型定義
type ScheduleItem = {
  day: string;
  subject: string;
  className: string;
  time: string;
  location: string;
};

// 時間割データ
const middleSchoolScheduleData: Record<string, ScheduleItem[]> = {
  "1年生": [
    { day: "月", subject: "数学", className: "スタンダード", time: "17:30~19:10", location: "本部1-2" },
    { day: "月", subject: "社会", className: "ハイレベル", time: "19:40~21:20", location: "本部1-2" },
    { day: "水", subject: "英語", className: "スタンダード", time: "15:30~17:10", location: "本部1-1" },
    { day: "金", subject: "国語", className: "トップ", time: "19:40~21:20", location: "本部1-1" }
  ],
  "2年生": [
    { day: "火", subject: "国語", className: "ハイレベル", time: "19:40~21:20", location: "本部1-1" },
    { day: "水", subject: "数学", className: "スタンダード", time: "17:30~19:00", location: "本部1-1" },
    { day: "木", subject: "英語", className: "スタンダード", time: "19:40~21:20", location: "本部1-2" },
    { day: "金", subject: "数学", className: "トップ", time: "19:40~21:20", location: "本部1-2" }
  ],
  "3年生": [
    { day: "月", subject: "社会", className: "トップ", time: "19:40~21:20", location: "本部1-2" },
    { day: "水", subject: "数学", className: "スタンダード", time: "17:30~19:00", location: "本部1-1" },
    { day: "木", subject: "英語", className: "スタンダード", time: "19:40~21:20", location: "本部1-2" },
    { day: "金", subject: "数学", className: "ハイレベル", time: "19:40~21:20", location: "本部1-2" }
  ]
};

// 費用データの型定義
type Fee = {
  name: string;
  amount: string;
  taxIncluded: string;
};

// 費用データ
const feeData = {
  common: [
    { name: "入会金（入会時のみ）", amount: "12,000円", taxIncluded: "13,200円" },
    { name: "事務処理費（年1回/4月末引落)", amount: "1,800円", taxIncluded: "1,980円" },
    { name: "冷房費（夏季一括/6月末引落)", amount: "3,000円", taxIncluded: "3,300円" },
    { name: "暖房費（冬季一括/10月末引落)", amount: "5,000円", taxIncluded: "5,500円" },
  ],
  "附中1": [
    { name: "授業料 (1科目/週1回 90分)", amount: "7,000円", taxIncluded: "7,700円" },
    { name: "授業料 (2科目/週2回 90分)", amount: "13,000円", taxIncluded: "14,300円" },
    { name: "授業料 (3科目/週3回 90分)", amount: "18,000円", taxIncluded: "19,800円" },
    { name: "授業料 (4科目/週4回 90分)", amount: "22,000円", taxIncluded: "24,200円" },
    { name: "授業料 (5科目/週5回 90分)", amount: "25,000円", taxIncluded: "27,500円" },
    { name: "英数割増 (1講)", amount: "1,000円", taxIncluded: "1,100円" },
    { name: "英数割増 (2講)", amount: "2,000円", taxIncluded: "2,200円" },
  ],
  "附中2_3": [
    { name: "授業料 (1科目/週1回 100分)", amount: "7,500円", taxIncluded: "8,250円" },
    { name: "授業料 (2科目/週2回 100分)", amount: "14,000円", taxIncluded: "15,400円" },
    { name: "授業料 (3科目/週3回 100分)", amount: "19,000円", taxIncluded: "20,900円" },
    { name: "授業料 (4科目/週4回 100分)", amount: "23,000円", taxIncluded: "25,300円" },
    { name: "授業料 (5科目/週5回 100分)", amount: "26,000円", taxIncluded: "28,600円" },
    { name: "英数割増 (1講)", amount: "1,000円", taxIncluded: "1,100円" },
    { name: "英数割増 (2講)", amount: "2,000円", taxIncluded: "2,200円" },
  ],
};

// クラス説明データ
const classDescriptions = {
  top: {
    title: "附中トップ(Top)クラス",
    target: "中2〜中3対象（附中生限定）",
    requirements: "※受講資格制限あり",
    subjects: "英語/数学のみ",
    description: "附中の最上位者限定のクラス。ハイレベルクラス対象者の中からさらに『余力がある』と担当講師が見なした生徒のみを選抜。将来的には弘前高校の最上位層を目指す。（対象者が複数名以上いる場合のみ設置する特別クラス）"
  },
  highLevel: {
    title: "附中ハイレベル(HL)クラス",
    target: "附中生限定",
    requirements: "※受講資格制限あり",
    subjects: "英語/数学のみ",
    description: "附中の上位者限定のクラス。附属中50位以内を対象とし、応用レベルや入試難問レベルを中心に指導。将来的には弘前高校の上位合格を目指す。"
  },
  standard: {
    title: "附中スタンダード(St)クラス",
    target: "附中生限定",
    description: "附中の上位者〜中位者を対象としたクラス。基礎から応用レベルまで幅広く指導。将来的には弘前高校および中央高校・南高校合格を目指す。"
  }
};

// 重要事項データ
const importantNotes = [
  "週１講（１教科）から受講できます。ご希望の科目を選択して下さい。",
  "中1は1講90分，中2・中3は1講100分の授業です。（途中5〜10分程度の小休止を挟みます。）",
  "各クラスは定員となり次第お申し込みを締め切らせていただくことがあります。",
  "英語および数学は、定期的に授業内でテストを実施します。都度その結果によってスタンダード/ハイレベルのいずれかのクラスに振り分けます。（テスト成績処理等として月額費用に「英数割増」が加算されます。）"
];

export default function JuniorHighPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <FloatingNav />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* クラス説明セクション */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold">クラス案内</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(classDescriptions).map(([key, info]) => (
                  <Card key={key}>
                    <CardHeader>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {info.target && <p className="text-sm font-medium mb-2">{info.target}</p>}
                      {"requirements" in info && <p className="text-sm text-red-500 mb-2">{info.requirements}</p>}
                      {"subjects" in info && <p className="text-sm text-blue-600 mb-2">{info.subjects}</p>}
                      <p className="text-sm text-gray-600">{info.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 重要事項セクション */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">重要事項</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {importantNotes.map((note, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="text-gray-700">{note}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* 時間割セクション */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold">時間割</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {Object.entries(middleSchoolScheduleData).map(([grade, schedule]) => (
                  <Card key={grade}>
                    <CardHeader>
                      <CardTitle>{grade}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {schedule.map((item, index) => (
                          <div key={index} className="text-sm border-b py-2">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{item.subject}</span>
                              <span>{item.day}曜日</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                              <span>{item.className}</span>
                              <span>{item.time}</span>
                            </div>
                            <div className="text-right text-gray-500 text-xs">
                              {item.location}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* 費用セクション */}
            <section className="space-y-8">
              <h2 className="text-2xl font-bold">費用一覧</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>共通費用</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {feeData.common.map((fee, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b">
                        <span>{fee.name}</span>
                        <span>
                          {fee.amount} <span className="text-gray-500">(税込{fee.taxIncluded})</span>
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                {Object.entries(feeData)
                  .filter(([key]) => key !== "common")
                  .map(([className, fees]) => (
                    <Card key={className}>
                      <CardHeader>
                        <CardTitle>{className} 費用</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {fees.map((fee, index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b">
                            <span>{fee.name}</span>
                            <div className="text-right">
                              <span className="font-bold">{fee.amount}</span>
                              <span className="text-sm text-gray-500 ml-2">(税込{fee.taxIncluded})</span>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}