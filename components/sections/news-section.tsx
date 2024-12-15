// app/newsSection.tsx
// 'use client'は記述しないことでサーバーコンポーネントとして扱われます

import NewsSectionClient from "components/sections/newsSectionClient.tsx"
import { client } from "@/lib/client";

type Article = {
  id: string;
  title: string;
  published: string;
  content: string;
};

async function getArticles(): Promise<Article[]> {
  try {
    // サーバー側なのでasync/await利用可能
    const { contents } = await client.get<{ contents: Article[] }>({
      endpoint: "news",
      queries: { limit: 4 },
    });
    return contents;
  } catch (error) {
    console.error("Error fetching news articles:", error);
    return [];
  }
}

export default async function NewsSection() {
  const articles = await getArticles();

  // データをクライアントコンポーネントへ渡す
  return <NewsSectionClient articles={articles} />;
}
