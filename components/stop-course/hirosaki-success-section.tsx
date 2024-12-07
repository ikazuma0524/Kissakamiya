"use client";

import { Card, CardContent } from "@/components/ui/card";
import { HirosakiDataVisualizer } from "./hirosaki-data-visualizer";

export function HirosakiSuccessSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-[#1e2a38] via-[#243c55] to-[#1e2a38] text-gray-100">
      {/* 背景エフェクト */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[800px] h-[800px] rounded-full blur-[100px] -top-40 -left-40 animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(59, 130, 246, 0.1) 100%)' }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[80px] top-1/4 right-10 animate-pulse duration-[6000ms]"
          style={{ background: 'radial-gradient(circle, rgba(96, 165, 250, 0.25) 0%, rgba(96, 165, 250, 0.1) 100%)' }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
          弘前高校での成功を見据えた教育
        </h2>

        <Card className="bg-white/20 backdrop-blur-md border border-white/10 shadow-lg p-8 rounded-2xl">
          <CardContent>
            <p className="text-gray-200 leading-relaxed mb-6">
              私たちの塾の特長はただ単に「弘前高校へ合格させる。」あるいは「弘前大附属中学校へ合格させる。」というだけでなく、進学先で成功させることにあります。
              S-TOPコースの構想自体は約15年前に考え出したものですが、その原点は「いかに弘前高校へ進学した後に成功させるか？」ということでした。
            </p>

            <div className="bg-blue-600/10 rounded-xl p-6 mb-6 shadow-inner">
              <p className="text-gray-200">
                市内NO1の進学校である弘前高校は1学年240名在籍しています。弘前高校入学後は「東北大」や「弘前大医学部」への進学を夢見て入学してくる生徒が大勢います。
              </p>
            </div>

            {/* データビジュアライゼーション */}
            <div className="my-12">
              <HirosakiDataVisualizer />
            </div>

            <div className="space-y-6">
              <p className="text-gray-200 leading-relaxed">
                表を見ていただければわかるように、学年の15％～20％程度です。「東北大」や「弘前大医学部」へのハードルはかなり高いと言えます。その下の「上位国立大」への進学者を入れて学年の約1/3くらいということになります。まずは弘前高校へ進学してからの目標としてはこのくらいまでということになるのではないでしょうか。
              </p>

              <p className="text-gray-200 leading-relaxed">
                S-TOPコースでは「中3卒業時までに超・高学力」をつけさせ、学年上位1/3以内を目指してもらいます。
              </p>

              <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 my-8 shadow-2xl overflow-hidden">
  {/* 背景オーバーレイ */}
  <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>

  {/* コンテンツ */}
  <div className="relative z-10">
    <h3 className="text-2xl font-bold text-white mb-4">
      S-TOPコースのもう一つの重要なテーマ
    </h3>
    <div className="space-y-4">
      <p className="text-white">
        弘前高校の成績中位者（80位～160位くらい）は弘前大学などのいわゆる「地方国立大」へ進学することになります。結果として「弘前中央高校」の上位120位以内や「弘前南高校」の上位80以内と同じ進学先になるということです。
      </p>
      <p className="text-white">
        さらに言えば弘前高校の下位1/3になってしまうと「弘前中央高校」「弘前南高校」の上位者より下の進学先になってしまいます。学年の約30％ですからこれはかなりのリスクです。
      </p>
    </div>
  </div>

  {/* オーバーレイデコレーション（オプション） */}
  <div className="absolute top-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
  <div className="absolute bottom-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
</div>


              {/* 最終メッセージ */}
              <div className="bg-blue-700 text-white rounded-xl p-8 shadow-lg">
                <p className="text-xl font-medium leading-relaxed">
                  S-TOPコースの側面として「弘前高校における落ちこぼれを予防する。」このことも強く意識して運営しています。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
