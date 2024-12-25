import dynamic from "next/dynamic";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import clsx from "clsx";

const FullCalendar = dynamic(() => import("@fullcalendar/react"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-[300px]">
      <p className="text-gray-500">カレンダーを読み込み中...</p>
    </div>
  ),
});

type EventData = {
  date: string; // "YYYY-MM-DD"形式の日付
  openornot: boolean; // trueなら営業、falseなら休業
  reason?: string; // 休業理由 (オプション)
};

interface CalendarProps {
  eventsData: EventData[];
}

const Calendar: React.FC<CalendarProps> = ({ eventsData }) => {
  // イベントデータをFullCalendar用に変換
  const events = eventsData.map((item) => {
    const isValidDate = !isNaN(new Date(item.date).getTime());
    if (!isValidDate) {
      console.warn(`Invalid date encountered: ${item.date}`);
      return null; // 不正な日付は無視
    }

    return {
      title: item.openornot ? "営業" : "休業",
      date: item.date,
      openornot: item.openornot,
      reason: item.reason ?? "",
    };
  }).filter((event): event is NonNullable<typeof event> => event !== null);

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale="ja"
        firstDay={0} // 日曜日開始
        height="auto"
        contentHeight="auto"
        eventContent={(arg) => {
          const isOpen = arg.event.extendedProps.openornot;
          const reason = arg.event.extendedProps.reason as string;
          const className = clsx(
            "text-base font-bold rounded px-1 py-0.5",
            {
              "bg-green-500 text-white": isOpen,
              "bg-red-500 text-white": !isOpen,
            }
          );

          return (
            <div className={className}>
              {arg.event.title}
              {!isOpen && reason && (
                <span className="text-sm block mt-1 text-gray-300">
                  {reason}
                </span>
              )}
            </div>
          );
        }}
      />
    </div>
  );
};

export default Calendar;
