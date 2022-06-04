import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./calendarHeader";
import Sidebar from "./sidebar";
import Month from "./month";
import { getMonth } from "../../util";
import CalendarGlobalContext from "../../context/calendarGlobalContext";
import EventModal from "./eventModal";

export default function Calendar({user}) {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(
    CalendarGlobalContext
  );
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar user={user}/>
          <Month month={currentMonth} user={user}/>
        </div>
      </div>
    </React.Fragment>
  );
}
