import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import { getMonth } from "../../util";
import CalendarGlobalContext from "../../context/CalendarGlobalContext";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex } = useContext(CalendarGlobalContext)
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])
  return (
    <React.Fragment>
      <div className="h-screen flex flex-col" >
    
      <CalendarHeader />
      <div className="flex flex-1">
        <Sidebar />
        <Month month={currentMonth} />
      </div>
      </div>
    </React.Fragment>
  )
}
