"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const universityData = [
  { name: '京都府', value: 17.49 },
  { name: '東京都', value: 10.5 },
  { name: '兵庫県', value: 7.26 },
  { name: '愛知県', value: 6.67 },
  { name: '大阪府', value: 5.74 },
  { name: '青森県', value: 0.83 }
];

export function EducationGapSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-[#101a24] via-[#131c26] to-[#0f1820] text-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 drop-shadow">
          教育格差の現状
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white drop-shadow-sm">
                東大・京大合格者数の地域格差
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer>
                  <BarChart data={universityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ddd" />
                    <YAxis stroke="#ddd" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} 
                      itemStyle={{ color: '#fff' }} 
                    />
                    <Bar dataKey="value" fill="#38bdf8" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-4 text-gray-200 leading-relaxed">
                青森県の生徒は東京の生徒と比べて、東大・京大への進学率が約1/8
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">教育格差の背景</h3>
              <div className="prose prose-invert prose-blue max-w-none">
                <p className="text-gray-200 leading-relaxed mb-4">
                  「教育格差」は貧富による教育レベルの差だけでなく、中央と地方の学習環境・進学実績格差も含まれます。
                  特に超難関大学である東大・京大への合格率は、大都市圏と地方で大きな乖離が見られます。
                </p>
                <p className="text-gray-200 leading-relaxed mb-4">
                  2010年のデータによれば、青森県の子どもは東京の子どもと比べて
                  東大・京大進学可能性が約1/8という深刻な状況にあります。
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="md:col-span-2 bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-4 text-white drop-shadow-sm">なぜこのような差が生まれるのか？</h3>
              <div className="grid md:grid-cols-2 gap-8 text-gray-200 leading-relaxed">
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-400">中高一貫校の影響</h4>
                  <p>
                    都市部には中高一貫校が多く、早期に高校課程を修了して大学受験対策に時間を割くことで、
                    超難関大学への進学率を押し上げています。
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-400">早期からの準備</h4>
                  <p>
                    開成や灘などのトップ校では、中3までに高校範囲を終了し、
                    小3冬からの受験準備期間を確保。こうした「先行学習」が差を生み出す大きな要因です。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 bg-gradient-to-br from-blue-900/80 to-blue-800/80 backdrop-blur-lg border border-blue-400/20 shadow-2xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
                S-TOPコースの挑戦
              </h3>
              <p className="text-blue-100 mb-6 leading-relaxed text-lg">
                トップゼミナールのS-TOPコースでは、中3卒業時までに超・高学力を養成し、
                中高一貫校生徒に対抗できる実力を育てます。
              </p>
              <p className="text-blue-200 leading-relaxed text-lg">
                この10年、私たちは地方と中央の教育格差を埋めるべく挑戦を続けてきました。
                子どもたちが思い描く「夢」を実現する力を、この環境で育み、未来へ繋げています。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
