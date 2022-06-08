import React, { useState, useEffect } from "react";
import Day from "./day";

let url;
if (process.env.REACT_APP_HEROKU_URL) {
  url = `${process.env.REACT_APP_HEROKU_URL}/backend/calendar/index`;
} else {
  url = "http://localhost:9000/backend/calendar/index";
}

export default function Month({ month, user, colour }) {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(url);
      response = await response.json();
      setData(
        response.events.filter(
          (event) => event.month === month[1][0].format("MM")
        )
      );
    }
    fetchMyAPI();
  }, [month]);

  useEffect(() => {
    setFiltered(data.filter((event) => event.selectedLabel === colour));
  }, [data, colour]);

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day
              day={day}
              key={idx}
              rowIdx={i}
              data={colour ? filtered : data}
              user={user}
              aria-label={`day-${i}`}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
