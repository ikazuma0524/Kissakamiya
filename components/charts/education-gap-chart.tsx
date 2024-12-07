"use client";

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

export function EducationGapChart() {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={universityData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={0} interval={0} />
          <YAxis width={50} />
          <Tooltip />
          <Bar dataKey="value" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}