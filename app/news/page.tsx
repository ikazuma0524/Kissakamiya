// app/news/page.tsx
import { fetchNewsList } from "@/lib/microcms";

export default async function NewsPage() {
  const newsList = await fetchNewsList();

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">お知らせ一覧</h1>
      <ul className="space-y-4">
        {newsList.contents.map((news: any) => (
          <li key={news.id}>
            <a
              href={`/news/${news.slug}`}
              className="text-blue-600 hover:underline"
            >
              {news.title} - {new Date(news.publishedAt).toLocaleDateString()}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
