"use client";

import { FloatingNav } from "@/components/floating-nav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

type Fee = { name: string; amount: string; taxIncluded: string };

const middleSchoolScheduleData = {
  附中1: [
    { day: "月", subject: "数学", className: "スタンダード", time: "17:30~19:10", location: "本部3-5" },
    { day: "月", subject: "社会", className: "ハイレベル", time: "19:40~21:20", location: "本部3-5" },
    { day: "水", subject: "英語", className: "スタンダード", time: "15:30~17:10", location: "本部3-5" },
    { day: "金", subject: "国語", className: "トップ", time: "19:40~21:20", location: "本部3-5" },
  ],
  附中2: [
    { day: "月", subject: "数学", className: "スタンダード", time: "19:40~21:20", location: "本部1-3" },
    { day: "水", subject: "理科", className: "ハイレベル", time: "19:40~21:20", location: "本部1-3" },
    { day: "木", subject: "英語", className: "スタンダード", time: "15:30~17:10", location: "本部1-3" },
    { day: "金", subject: "社会", className: "スタンダード", time: "19:40~21:20", location: "本部1-3" },
  ],
  附中3: [
    { day: "月", subject: "社会", className: "トップ", time: "19:40~21:20", location: "本部1-1" },
    { day: "火", subject: "国語", className: "ハイレベル", time: "19:40~21:20", location: "本部1-1" },
    { day: "水", subject: "数学", className: "スタンダード", time: "17:30~19:00", location: "本部1-1" },
    { day: "金", subject: "英語", className: "スタンダード", time: "19:40~21:20", location: "本部1-1" },
  ],
};

const feeData = {
  common: [
    { name: "入会金（入会時のみ）", amount: "12,000円", taxIncluded: "13,200円" },
    { name: "事務処理費（年1回/4月末引落)", amount: "1,800円", taxIncluded: "1,980円" },
    { name: "冷房費（夏季一括/6月末引落)", amount: "3,000円", taxIncluded: "3,300円" },
    { name: "暖房費（冬季一括/10月末引落)", amount: "5,000円", taxIncluded: "5,500円" },
  ],
  附中1: [
    { name: "授業料 (1科目/週1回 90分)", amount: "7,000円", taxIncluded: "7,700円" },
    { name: "授業料 (2科目/週2回 90分)", amount: "13,000円", taxIncluded: "14,300円" },
    { name: "授業料 (3科目/週3回 90分)", amount: "18,000円", taxIncluded: "19,800円" },
    { name: "授業料 (4科目/週4回 90分)", amount: "22,000円", taxIncluded: "24,200円" },
    { name: "授業料 (5科目/週5回 90分)", amount: "25,000円", taxIncluded: "27,500円" },
    { name: "英数割増 (1講)", amount: "1,000円", taxIncluded: "1,100円" },
    { name: "英数割増 (2講)", amount: "2,000円", taxIncluded: "2,200円" },
  ],
  附中2_3: [
    { name: "授業料 (1科目/週1回 100分)", amount: "7,500円", taxIncluded: "8,250円" },
    { name: "授業料 (2科目/週2回 100分)", amount: "14,000円", taxIncluded: "15,400円" },
    { name: "授業料 (3科目/週3回 100分)", amount: "19,000円", taxIncluded: "20,900円" },
    { name: "授業料 (4科目/週4回 100分)", amount: "23,000円", taxIncluded: "25,300円" },
    { name: "授業料 (5科目/週5回 100分)", amount: "26,000円", taxIncluded: "28,600円" },
    { name: "英数割増 (1講)", amount: "1,000円", taxIncluded: "1,100円" },
    { name: "英数割増 (2講)", amount: "2,000円", taxIncluded: "2,200円" },
  ],
};

export default function JuniorHighPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <FloatingNav />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <section className="space-y-8">
              <h2 className="text-2xl font-bold mb-4">費用一覧</h2>
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
