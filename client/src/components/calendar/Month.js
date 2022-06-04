import React, { useState, useEffect } from "react";
import Day from "./day";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/calendar/index`;
} else {
  url = "http://localhost:9000/backend/calendar/index";
}

export default function Month({ month, user }) {
  const [data, setData] = useState([]);
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

  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} data={data} user={user} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
