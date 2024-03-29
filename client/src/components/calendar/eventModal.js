import React, { useContext, useState } from "react";
import CalendarGlobalContext from "../../context/calendarGlobalContext";

export const labelClasses = [
  "indigo",
  "red",
  "blue",
  "green",
  "purple",
  "gray",
];

let url;
if (process.env.REACT_APP_URL) {
  url = `${process.env.REACT_APP_URL}/backend/calendar`;
} else {
  url = "http://localhost:9000/backend/calendar";
}

export default function EventModal() {
  const { setShowEventModal, daySelected } = useContext(CalendarGlobalContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelClasses[0]);

  const handleSubmit = () => {
    const day = daySelected.format("DD");
    const month = daySelected.format("MM");
    const year = daySelected.format("YY");
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        day,
        month,
        year,
        selectedLabel,
      }),
    });
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              aria-label="title"
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              aria-label="description"
              type="text"
              name="description"
              placeholder="Add a description"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelClasses.map((lblClass, i) => (
                <span
                  aria-label={`label-${i}`}
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined text-white text-sm">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
