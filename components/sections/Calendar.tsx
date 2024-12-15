"use client";

import dynamic from 'next/dynamic';
import React from 'react';
import dayGridPlugin from '@fullcalendar/daygrid';

const FullCalendar = dynamic(() => import('@fullcalendar/react'), {
  ssr: false
});

type EventData = {
  date: string;
  openornot: boolean;
  reason?: string;
};

interface CalendarProps {
  eventsData: EventData[];
}

const Calendar: React.FC<CalendarProps> = ({ eventsData }) => {
  const events = eventsData.map(item => ({
    title: item.openornot ? '営業' : '休業', 
    date: item.date,
    openornot: item.openornot
  }));

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        locale="ja"
        firstDay={0}
        eventContent={(arg) => {
          const isOpen = arg.event.extendedProps.openornot;
          const className = isOpen
            ? 'text-base font-bold bg-green-500 text-white rounded px-1 py-0.5'
            : 'text-base font-bold bg-red-500 text-white rounded px-1 py-0.5';
          
          return <div className={className}>{arg.event.title}</div>;
        }}
        height="auto"
        contentHeight="auto"
      />
    </div>
  );
};

export default Calendar;
