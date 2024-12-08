"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import Link from "next/link";
import { client } from "../../lib/client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

type Article = {
  id: string;
  title: string;
  published: string;
  content: string;
};

// 動的レンダリングコンポーネント
const DynamicContent = dynamic(
  () =>
    Promise.resolve((props: { content: string }) => (
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    )),
  { ssr: false }
);

export default function NewsPage() {
  const [articles, setArticles] = useState<Article[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { contents } = await client.get<{ contents: Article[] }>({
          endpoint: "news",
        });
        setArticles(contents);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError("ニュース記事の取得に失敗しました。");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
        <Card className="container max-w-lg mx-auto my-12 p-8 text-center bg-white/70 backdrop-blur-sm">
          <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Newspaper className="h-6 w-6 text-red-600" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl text-red-600 mb-4">エラーが発生しました</CardTitle>
          <p className="text-gray-600">{error}</p>
        </Card>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center">
        <Card className="max-w-lg mx-auto p-8 text-center bg-white/70 backdrop-blur-sm">
          <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
            <Newspaper className="h-6 w-6 text-purple-600" aria-hidden="true" />
          </div>
          <CardTitle className="text-2xl mb-4">お知らせはありません</CardTitle>
          <p className="text-gray-600">
            新しいお知らせが投稿されると、ここに表示されます。
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto py-16 px-4">
        {/* ヘッダー */}
        <div className="text-center mb-12">
          <div className="inline-block p-2 bg-purple-100 rounded-lg mb-4">
            <Newspaper className="h-6 w-6 text-purple-600" aria-hidden="true" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 text-transparent bg-clip-text">
            Latest Updates
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-full" />
        </div>

        {/* 記事リスト */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
          {articles.map((article) => (
            <Link href={`/news/${encodeURIComponent(article.id)}`} key={article.id}>
              <Card className="group h-[400px] max-w-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-none bg-white/70 backdrop-blur-sm">
                <CardHeader className="space-y-4 pb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="bg-purple-100 p-1.5 rounded-full">
                      <Calendar className="h-4 w-4 text-purple-600" aria-hidden="true" />
                    </div>
                    {new Date(article.published).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div
                    className="text-gray-600 text-sm line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                  <div className="pt-4 border-t border-gray-100">
                    <Button
                      variant="ghost"
                      className="w-full group-hover:text-purple-600 group-hover:bg-purple-50 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight
                        className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
