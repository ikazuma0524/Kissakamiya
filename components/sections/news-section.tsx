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
          queries: { limit: 4 },
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-black opacity-70">お知らせを読み込んでいます...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-black opacity-70">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-black tracking-wide">
          最新のお知らせ
        </h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="flex flex-col md:flex-row items-start gap-6 bg-white border border-gray-300 p-6 transition-transform duration-300 hover:opacity-90"
            >
              <div className="flex-shrink-0 text-black">
                <Calendar className="w-8 h-8" />
              </div>
              <div className="flex-1">
                <CardHeader className="p-0">
                  <CardTitle className="text-2xl font-semibold text-black">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <div
                    className="text-black text-sm md:text-base line-clamp-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </CardContent>
                <div className="mt-4">
                  <Link
                    href={`/news/${article.id}`}
                    className="text-black underline underline-offset-4 hover:opacity-75"
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
            <button className="px-6 py-3 bg-black text-white font-bold text-lg rounded-sm hover:opacity-75 transition">
              全てのお知らせを見る
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
