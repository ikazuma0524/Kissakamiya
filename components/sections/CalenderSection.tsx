import { client } from '@/lib/client';
import Calendar from './Calendar';

type NewsItem = {
  data: string;  // microCMSで"data"というフィールドに日付が格納されている想定
  openornot: boolean;
  reason?: string;
};

type MicroCMSResponse = {
  contents: NewsItem[];
  totalCount: number;
  offset: number;
  limit: number;
};

export default async function CalendarSection() {
  // microCMSからデータ取得
  const data = await client.get<MicroCMSResponse>({ endpoint: 'kamiya' });

  // dataフィールドをdateフィールドにマッピング
  const eventsData = data.contents.map(item => ({
    date: item.data,
    openornot: item.openornot,
    reason: item.reason
  }));

  // 現在の年と月
  const now = new Date();
  const currentYear = now.getFullYear().toString();
  const currentMonth = (now.getMonth() + 1).toString().padStart(2, '0');

  // 今月の休業日抽出
  const closedThisMonth = eventsData.filter(ev => {
    const [y, m] = ev.date.split('-');
    return (y === currentYear && m === currentMonth && ev.openornot === false);
  });

  // "M月D日"形式に整形
  const closedThisMonthFormatted = closedThisMonth.map(ev => {
    const parsedDate = new Date(ev.date);
    const month = parsedDate.getMonth() + 1;
    const day = parsedDate.getDate();
    return `${month}月${day}日`;
  });

  const closedDaysText = closedThisMonthFormatted.length > 0
    ? `今月の休業日: ${closedThisMonthFormatted.join(', ')}`
    : '今月の休業日はありません';

  return (
    <section className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-6 text-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-8 text-gray-900 text-center">
          営業日カレンダー
        </h1>
        
        <p className="text-xl md:text-2xl mb-6 text-center font-semibold text-gray-900">
          {closedDaysText}
        </p>

        <div className="bg-gray-100 rounded-lg shadow p-6">
          <Calendar eventsData={eventsData} />
        </div>
      </div>
    </section>
  );
}
