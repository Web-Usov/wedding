import React from "react";
import { ShortDate } from "../types/short-date";
import { SectionTitle } from "./ui";

interface SaveTheDateCalendarProps {
  date: ShortDate;
  title?: string;
  names?: string;
  subtitle?: string;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number): number {
  // 0 (вс) - 6 (сб)
  return new Date(year, month, 1).getDay();
}

const monthNames = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const SaveTheDateCalendar: React.FC<SaveTheDateCalendarProps> = ({
  date,
  names,
  subtitle,
}) => {
  const { day, year } = date;
  const month = date.month - 1;

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);
  // Сдвиг для начала недели с понедельника
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const calendarCells: (number | null)[] = [];
  for (let i = 0; i < offset; i++) calendarCells.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarCells.push(i);

  const weeks: (number | null)[][] = [];
  for (let i = 0; i < calendarCells.length; i += 7) {
    weeks.push(calendarCells.slice(i, i + 7));
  }

  return (
    <div className="flex flex-col items-center justify-center ">
      {/* Месяц и год */}
      {/* <div className="uppercase  text-lg mb-6 text-center text-gray-700 ">
      </div> */}
      <SectionTitle>
        {monthNames[month]} {year}
      </SectionTitle>

      {/* Сетка календаря */}
      <div className="mb-10">
        <div className="grid grid-cols-7 gap-y-8 gap-x-8 text-center text-gray-700 text-xl">
          {weeks.map((week, wIdx) =>
            week.map((cell, dIdx) =>
              cell ? (
                <div
                  key={`${wIdx}-${dIdx}`}
                  className={`relative w-10 h-10 flex items-center justify-center ${
                    cell === day ? "font-bold text-gray-900" : "text-gray-700"
                  }`}
                >
                  {cell}
                  {cell === day && (
                    <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      {/* Сердце-обводка */}
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 40 40"
                        fill="none"
                        className="absolute"
                      >
                        <path
                          d="M20 34s-9-7.5-13-12C3 17 3 11 8 8c5-3 9 2 12 5 3-3 7-8 12-5 5 3 5 9 1 14-4 4.5-13 12-13 12z"
                          stroke="#f4c1c1"
                          strokeWidth="3"
                          fill="none"
                        />
                      </svg>
                    </span>
                  )}
                </div>
              ) : (
                <div key={`${wIdx}-${dIdx}`}></div>
              )
            )
          )}
        </div>
      </div>

      {/* Подпись */}
      <div className="text-center">
        <div
          className="uppercase tracking-widest text-xl font-light mb-2"
          style={{ letterSpacing: "0.2em" }}
        >
          {names}
        </div>
        <div
          className="tracking-widest text-base text-gray-600"
          style={{ letterSpacing: "0.18em" }}
        >
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default SaveTheDateCalendar;
