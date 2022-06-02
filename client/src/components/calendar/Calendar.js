import React, { useState, useContext, useEffect } from "react";
import CalendarHeader from "./CalendarHeader";
import Sidebar from "./Sidebar";
import Month from "./Month";
import { getMonth } from "../../util";
import CalendarGlobalContext from "../../context/CalendarGlobalContext";
import EventModal from "./EventModal";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const { monthIndex, showEventModal, showEventDescription } = useContext(CalendarGlobalContext)
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  let urlUsers;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    urlUsers = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/users`;
  } else {
    urlUsers = "http://localhost:9000/backend/users";
  }

  const [data, setData] = useState([])
  useEffect(()=>{
    async function fetchMyAPI() {
      let response = await fetch(urlUsers, { method: "GET", credentials: "include", headers: { "Content-Type": "application/json" }, })
      response = await response.json()
      setData(response)
    }
    fetchMyAPI()
  }, [urlUsers])

  return (
    <React.Fragment>
      {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col" >
        <CalendarHeader />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} user={data}/>
        </div>
      </div>
    </React.Fragment>
  )
}
