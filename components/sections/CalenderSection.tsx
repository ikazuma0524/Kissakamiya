import dynamic from "next/dynamic"
import { client } from "@/lib/client"

// microCMS 側が Date型 を使っていると、
// APIレスポンスは "2024-02-15T00:00:00.000Z" のような ISO形式になる
type NewsItem = {
  date: string;   // ISO8601文字列が入る (例: "2024-02-15T00:00:00.000Z")
  openornot: boolean;
  reason?: string;
}

type MicroCMSResponse = {
  contents: NewsItem[];
  totalCount: number;
  offset: number;
  limit: number;
}

// カレンダーコンポーネントを動的インポート
const Calendar = dynamic(() => import("./Calendar"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[300px]">
      <p className="text-gray-500">カレンダーを読み込み中...</p>
    </div>
  ),
});

export default async function CalendarSection() {
  // microCMS からデータ取得
  const data = await client.get<MicroCMSResponse>({ endpoint: "kamiya" });

  // ISO8601 形式の date をパースして、年・月・日を抽出
  const eventsData = data.contents.map((item) => {
    // openornot が null/undefined だったら true 扱いに
    const openornot = item.openornot ?? true;

    // 日付を JS の Date オブジェクトに変換
    const parsedDate = new Date(item.date);
    if (isNaN(parsedDate.getTime())) {
      // 不正な形式の場合は何かしらのフォールバック or 除外
      // とりあえず、空文字 "" で入れておく
      return {
        date: "",
        openornot,
        reason: item.reason ?? "",
      };
    }

    // "YYYY-MM-DD" の文字列を作る（ISO文字列から年月日を切り出す場合）
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;

    return {
      date: formattedDate, // "YYYY-MM-DD" に整形
      openornot,
      reason: item.reason ?? "",
    };
  });

  // 現在の年・月を取得 (UTCではなくローカルタイムが必要なら注意)
  const now = new Date();
  const currentYear = now.getFullYear().toString();
  const currentMonth = String(now.getMonth() + 1).padStart(2, "0");

  // 今月の休業日を抽出
  const closedThisMonth = eventsData.filter((ev) => {
    if (!ev.date) return false;
    const [y, m] = ev.date.split("-");
    // openornot が false の場合を休業日とみなす
    return y === currentYear && m === currentMonth && ev.openornot === false;
  });

  // "M月D日"形式に整形
  const closedThisMonthFormatted = closedThisMonth
    .map((ev) => {
      const [yearStr, monthStr, dayStr] = ev.date.split("-");
      if (!dayStr) return null; // もし dayStr が取れなければ無視

      // 例: "1月31日"
      return `${parseInt(monthStr, 10)}月${parseInt(dayStr, 10)}日`;
    })
    .filter((val): val is string => val !== null);

  // 休業日の表示用要素
  let closedDaysElement;
  if (closedThisMonthFormatted.length === 0) {
    closedDaysElement = (
      <p className="text-xl md:text-2xl mb-6 text-center font-semibold text-gray-900">
        今月の休業日はありません
      </p>
    );
  } else if (closedThisMonthFormatted.length === 1) {
    closedDaysElement = (
      <p className="text-xl md:text-2xl mb-6 text-center font-semibold text-gray-900">
        今月の休業日: {closedThisMonthFormatted[0]}
      </p>
    );
  } else {
    closedDaysElement = (
      <div className="mb-6 text-center">
        <p className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
          今月の休業日:
        </p>
        <ul className="inline-block text-xl md:text-2xl font-semibold text-gray-900 list-disc list-inside">
          {closedThisMonthFormatted.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-gray-900 text-center">
          営業日カレンダー
        </h1>

        {closedDaysElement}

        <div className="bg-gray-100 rounded-lg shadow p-6">
          {/* SSR時とCSR時でレイアウトが揺れにくいように、プレースホルダーをTailwindクラスで管理 */}
          <div className="min-h-[300px] md:min-h-[400px]">
            <Calendar eventsData={eventsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
