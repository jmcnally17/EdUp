// Controls the states

import React from "react";
import dayjs from "dayjs";

const CalendarGlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: (index) => {},
  daySelected: new dayjs("2022-06-07"),
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  showEventDescription: false,
  setShowEventDescription: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
});

export default CalendarGlobalContext;
