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
  Legend,
} from "recharts";

type YearData = {
  year: string;
  定員: number;
  [key: string]: string | number;
};

const yearData: YearData[] = [
  {
    year: "令和2年",
    "S群合計": 6,
    "A群合計": 41,
    "B群合計": 21,
    "S：東京大": 4,
    "S：京都大": 0,
    "S：東北大(医・医)": 2,
    "S：東工大": 0,
    "S：一橋大": 0,
    "A：国公立(医・医)": 12,
    "A：東北大(医・医以外)": 29,
    "A：北海道大": 0,
    "B：筑波大": 0,
    "B：千葉大": 8,
    "B：東京外語大": 2,
    "B：東京学芸大": 0,
    "B：首都大学東京": 2,
    "B：横浜国立大": 2,
    "B：埼玉大": 2,
    "B：新潟大": 4,
    "B：その他上位国公立": 1,
    定員: 240,
  },
  {
    year: "平成31年",
    "S群合計": 3,
    "A群合計": 29,
    "B群合計": 30,
    "S：東京大": 0,
    "S：京都大": 1,
    "S：東北大(医・医)": 1,
    "S：東工大": 1,
    "S：一橋大": 0,
    "A：国公立(医・医)": 13,
    "A：東北大(医・医以外)": 13,
    "A：北海道大": 3,
    "B：筑波大": 4,
    "B：千葉大": 3,
    "B：東京外語大": 1,
    "B：東京学芸大": 2,
    "B：首都大学東京": 5,
    "B：横浜国立大": 2,
    "B：埼玉大": 0,
    "B：新潟大": 10,
    "B：その他上位国公立": 5,
    定員: 240,
  },
  {
    year: "平成30年",
    "S群合計": 5,
    "A群合計": 41,
    "B群合計": 33,
    "S：東京大": 4,
    "S：京都大": 0,
    "S：東北大(医・医)": 1,
    "S：東工大": 0,
    "S：一橋大": 0,
    "A：国公立(医・医)": 9,
    "A：東北大(医・医以外)": 30,
    "A：北海道大": 2,
    "B：筑波大": 0,
    "B：千葉大": 3,
    "B：東京外語大": 0,
    "B：東京学芸大": 0,
    "B：首都大学東京": 1,
    "B：横浜国立大": 1,
    "B：埼玉大": 2,
    "B：新潟大": 21,
    "B：その他上位国公立": 4,
    定員: 240,
  },
];

export function HirosakiDataVisualizer() {
  return (
    <div className="space-y-8">
      {/* 年ごとのS群、A群、B群の合格者数推移 */}
      <Card>
        <CardHeader>
          <CardTitle>大学群別合格者数推移</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={yearData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}名`]} />
                <Legend />
                <Bar name="S群（超難関大）" dataKey="S群合計" fill="#1e40af" />
                <Bar name="A群（難関大）" dataKey="A群合計" fill="#3b82f6" />
                <Bar name="B群（上位国公立）" dataKey="B群合計" fill="#93c5fd" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* 各年の内訳 */}
      <div className="grid gap-6 md:grid-cols-3">
        {/* S群内訳 */}
        <Card>
          <CardHeader>
            <CardTitle>S群：超難関大学詳細</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}名`]} />
                  <Legend />
                  <Bar name="東京大" dataKey="S：東京大" fill="#1e40af" />
                  <Bar name="京都大" dataKey="S：京都大" fill="#2563eb" />
                  <Bar name="東北大(医・医)" dataKey="S：東北大(医・医)" fill="#3b82f6" />
                  <Bar name="東工大" dataKey="S：東工大" fill="#60a5fa" />
                  <Bar name="一橋大" dataKey="S：一橋大" fill="#93c5fd" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* A群内訳 */}
        <Card>
          <CardHeader>
            <CardTitle>A群：難関大学詳細</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}名`]} />
                  <Legend />
                  <Bar name="国公立(医・医)" dataKey="A：国公立(医・医)" fill="#0f766e" />
                  <Bar name="東北大(医・医以外)" dataKey="A：東北大(医・医以外)" fill="#2dd4bf" />
                  <Bar name="北海道大" dataKey="A：北海道大" fill="#5eead4" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* B群内訳 */}
        <Card>
          <CardHeader>
            <CardTitle>B群：上位国公立大学詳細</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value}名`]} />
                  <Legend />
                  <Bar name="筑波大" dataKey="B：筑波大" fill="#84cc16" />
                  <Bar name="千葉大" dataKey="B：千葉大" fill="#a3e635" />
                  <Bar name="東京外語大" dataKey="B：東京外語大" fill="#bef264" />
                  <Bar name="東京学芸大" dataKey="B：東京学芸大" fill="#d9f99d" />
                  <Bar name="新潟大" dataKey="B：新潟大" fill="#fef08a" />
                  <Bar name="その他" dataKey="B：その他上位国公立" fill="#fde68a" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
