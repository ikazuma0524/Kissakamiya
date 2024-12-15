"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";

type Article = {
  id: string;
  title: string;
  published: string;
  content: string;
};

interface NewsSectionClientProps {
  articles: Article[];
}

export default function NewsSectionClient({ articles }: NewsSectionClientProps) {
  // 受け取ったarticlesをそのままレンダリング
  // 非同期処理はサーバーコンポーネントで済ませているため、ここでは単純な描画のみ行う

  if (articles.length === 0) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-[#fdf2e9]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-800 opacity-70">お知らせは現在ありません。</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#fdf2e9]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-serif tracking-wide text-center mb-16 text-gray-900">
          最新のお知らせ
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col md:flex-row items-start gap-6 bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:shadow-lg hover:scale-[1.01]"
            >
              <div className="flex-shrink-0 text-gray-700">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-serif font-semibold text-gray-900">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-3">
                  <div
                    className="text-gray-800 text-sm md:text-base leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </CardContent>
                <div className="mt-4">
                  <Link
                    href={`/news/${article.id}`}
                    className="text-gray-800 underline underline-offset-4 hover:opacity-75 transition-colors"
                  >
                    続きを読む →
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/news">
            <button className="px-6 py-3 bg-gray-900 text-white font-bold text-lg rounded-sm hover:opacity-80 transition">
              全てのお知らせを見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
