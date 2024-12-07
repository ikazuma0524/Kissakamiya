import { fetchNewsDetail } from "@/lib/microcms";

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  console.log("params:", params); // デバッグ用
  console.log("params.slug:", params.slug); // デバッグ用

  if (!params.slug) {
    return (
      <main>
        <h1>エラー</h1>
        <p>無効なURLです。</p>
      </main>
    );
  }

  try {
    const newsDetail = await fetchNewsDetail(params.slug);
    return (
      <main>
        <h1>{newsDetail.title}</h1>
        <p>{newsDetail.content}</p>
      </main>
    );
  } catch (error) {
    console.error("Error fetching news detail:", error);
    return (
      <main>
        <h1>エラーが発生しました</h1>
        <p>ニュースの詳細を取得できませんでした。</p>
      </main>
    );
  }
}
