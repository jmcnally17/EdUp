import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import { getMonth } from "../../util";
import CalendarGlobalContext from "../../context/CalendarGlobalContext";
import EventModal from "./EventModal";

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
