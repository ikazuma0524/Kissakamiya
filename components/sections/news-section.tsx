"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import Link from "next/link";
import { client } from "@/lib/client";

type Article = {
  id: string;
  title: string;
  published: string;
  content: string;
};

export function NewsSection() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { contents } = await client.get<{ contents: Article[] }>({
          endpoint: "news",
          queries: { limit: 4 }, // 最新の4件を取得
        });
        setArticles(contents);
      } catch (err) {
        console.error("Error fetching news articles:", err);
        setError("お知らせの取得中にエラーが発生しました。");
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">お知らせを読み込んでいます...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-gray-800 tracking-wide">
          最新のお知らせ
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col md:flex-row items-start gap-6 shadow-md transition-transform duration-300 bg-white rounded-lg border border-gray-200 p-6 hover:scale-105"
            >
              <div className="flex-shrink-0">
                <Calendar className="w-12 h-12 text-blue-500" />
              </div>
              <div className="flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold text-gray-800">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="text-gray-600 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </CardContent>
                <div className="mt-4">
                  <Link
                    href={`/news/${article.id}`}
                    className="text-blue-600 hover:text-blue-400 font-medium underline underline-offset-4 transition"
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
            <button className="px-6 py-3 bg-blue-600 text-white font-bold text-lg rounded-lg shadow hover:bg-blue-500 transition">
              全てのお知らせを見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
