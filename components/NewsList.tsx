"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type NewsItem = {
  id: string;
  title: string;
  published: string;
  content: string;
  image?: {
    url: string;
  };
};

export default function NewsList() {
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_MICROCMS_API_URL}/news`, {
          headers: {
            "X-API-KEY": process.env.NEXT_PUBLIC_MICROCMS_API_KEY || "",
          },
        });

        if (!res.ok) {
          throw new Error("ニュース一覧の取得に失敗しました");
        }

        const data = await res.json();
        setNewsList(data.contents);
      } catch (err: any) {
        setError(err.message || "未知のエラーが発生しました");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>読み込み中...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">お知らせ一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map((news) => (
          <div key={news.id} className="border rounded-lg shadow-md overflow-hidden">
            {news.image && (
              <img
                src={news.image.url}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{news.title}</h2>
              <p className="text-sm text-gray-500 mb-4">
                更新日: {new Date(news.published).toLocaleDateString()}
              </p>
              <p className="text-gray-700 line-clamp-3">{news.content}</p>
              <Link href={`/news/${news.id}`}>
                <a className="text-blue-500 hover:underline block mt-4">続きを読む</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
