import React, { useContext } from "react";
import CalendarGlobalContext from "../../context/calendarGlobalContext";
import dayjs from "dayjs";
import local192 from "../../logo/local192.png";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex } = useContext(CalendarGlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNexMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <header className="px-4 py-2 flex items-center">
      <img src={local192} alt="calendar" className="mr-2 w-15 h-15" />
      <h1 className="mr-12 text-xl text-gray-800 fond-bold"> Calendar</h1>
      <button onClick={handleReset} className="border rounded py-3 px-6 mr-7">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNexMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>
    </header>
  );
}
