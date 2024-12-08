import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { client } from "../../../lib/client";

type Article = {
  id: string;
  title: string;
  published: string;
  content: string;
};

type Props = {
  params: { id: string };
};

export default async function NewsDetailPage({ params }: Props) {
  try {
    const article = await client.get<Article>({
      endpoint: `news/${params.id}`,
    });

    if (!article) {
      return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center pt-16">
          <Card className="container max-w-lg mx-auto my-12 p-8 text-center bg-white/70 backdrop-blur-sm">
            <div className="bg-purple-100 p-3 rounded-full w-fit mx-auto mb-4">
              <ArrowLeft className="h-6 w-6 text-purple-600" />
            </div>
            <CardTitle className="text-2xl text-gray-800 mb-4">記事が見つかりません</CardTitle>
            <p className="text-gray-600">
              リンクが無効か、記事が削除されています。<br />
              <Link href="/news" className="text-purple-600 hover:underline">ニュース一覧へ戻る</Link>
            </p>
          </Card>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
        <div className="container mx-auto py-8 px-4">
          {/* 戻るリンク */}
          <div className="mb-8">
            <Link href="/news" className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to News
            </Link>
          </div>

          {/* 記事内容 */}
          <Card className="bg-white/70 backdrop-blur-sm">
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
              <CardTitle className="text-4xl font-bold text-gray-800">{article.title}</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none text-gray-700">
              {/* HTMLレンダリング */}
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </CardContent>
          </Card>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching article:", error);
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center pt-16">
        <Card className="container max-w-lg mx-auto my-12 p-8 text-center bg-white/70 backdrop-blur-sm">
          <div className="bg-red-100 p-3 rounded-full w-fit mx-auto mb-4">
            <ArrowLeft className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-2xl text-red-600 mb-4">エラーが発生しました</CardTitle>
          <p className="text-gray-600">
            ニュース記事の取得中にエラーが発生しました。<br />
            しばらく経ってから再度お試しください。<br />
            <Link href="/news" className="text-purple-600 hover:underline">ニュース一覧へ戻る</Link>
          </p>
        </Card>
      </div>
    );
  }
}
