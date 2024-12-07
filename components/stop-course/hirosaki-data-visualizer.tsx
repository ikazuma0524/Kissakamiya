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
  Legend
} from "recharts";

type YearData = {
  year: string;
  定員: number;
  [key: string]: string | number;
};

const yearData: YearData[] = [
  {
    year: "令和2年",
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
    定員: 240
  },
  {
    year: "平成31年",
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
    定員: 240
  },
  {
    year: "平成30年",
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
    定員: 240
  }
];

export function HirosakiDataVisualizer() {
  return (
    <div className="space-y-8">
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
                <Tooltip
                  formatter={(value, name) => {
                    const found = yearData.find(
                      (d) =>
                        d[name as keyof YearData] === value
                    );
                    return found ? [`${value}名`] : [`${value}`];
                  }}
                />
                <Legend />
                <Bar name="S群（超難関大）" dataKey="S：東京大" fill="#1e40af" />
                <Bar name="A群（難関大）" dataKey="A：国公立(医・医)" fill="#3b82f6" />
                <Bar name="B群（上位国公立）" dataKey="B：筑波大" fill="#93c5fd" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
