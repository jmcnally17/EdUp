import React, { useContext } from "react";
import dayjs from "dayjs";
import CalendarGlobalContext from "../../context/calendarGlobalContext";
import Popup from "reactjs-popup";

export default function Day({ day, _key, rowIdx, data, user }) {
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white rounded-full w-7"
      : "";
  }

  let deleteUrl;
  if (process.env.REACT_APP_URL) {
    deleteUrl = `${process.env.REACT_APP_URL}/backend/calendar/delete`;
  } else {
    deleteUrl = "http://localhost:9000/backend/calendar/delete";
  }

  const handleDelete = (eventId) => {
    fetch(`${deleteUrl}/${eventId}`, {
      method: "DELETE",
    });
    window.location.reload(false);
  };

  const deleteIfAdmin = (eventId) => {
    if (user.admin) {
      return (
        <button
          type="submit"
          onClick={() => {
            handleDelete(eventId);
          }}
        >
          <a className="btn-smalls white right">
            <i className="material-icons-two-tone">delete_forever</i>
          </a>
        </button>
      );
    }
  };

  const createEvent = () => {
    if (user.admin) {
      setDaySelected(day);
      setShowEventModal(true);
    } else {
      setDaySelected(day);
    }
  };

  const { setDaySelected, setShowEventModal } = useContext(
    CalendarGlobalContext
  );

  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
        {data.map((event, key) => {
          let shorten;
          if (event.title.length > 12) {
            shorten = `${event.title.slice(0, 12)}...`;
          } else {
            shorten = event.title;
          }

          return (
            <Popup
              trigger={
                <button
                  className={`bg-${event.selectedLabel}-500 w-full text-white`}
                >
                  {event.day === day.format("DD") &&
                  event.month === day.format("MM") &&
                  event.year === day.format("YY")
                    ? shorten
                    : null}
                </button>
              }
              position="left center"
              on="click"
              key={key}
            >
              <div>
                <div className="col s12 m7 width-2">
                  <div className="card horizontal">
                    <div className="card-image"></div>
                    <div className="card-stacked max-w-md ">
                      <div className="card-content">
                        <p className="font-bold">{event.title}:</p>
                        <p>{event.description}</p>
                        {deleteIfAdmin(event._id)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          );
        })}
      </header>
      <div className="flex-1 cursor-pointer" onClick={createEvent}></div>
    </div>
  );
}
