import React, { useContext, useState, useEffect } from 'react'
import Day from './Day'

export default function Month({ month, user }) {

  let urlCalendar;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    urlCalendar = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/calendar/index`;
  } else {
    urlCalendar = "http://localhost:9000/backend/calendar/index";
  }

  const [data, setData] = useState([])
  useEffect(()=>{
    async function fetchMyAPI() {
      let response = await fetch(urlCalendar)
      response = await response.json()
      setData(response.events.filter((event) => event.month === month[1][0].format("MM")))
    }
    fetchMyAPI()
  }, [urlCalendar, month])
  
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} data={data} user={user}/>
          ))}
        </React.Fragment>
      ))}
    </div>
  )
};
