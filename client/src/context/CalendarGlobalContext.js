// Controls the states

import React from 'react'

const CalendarGlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => { },
  smallCalendarMonth: 0, 
  setSmallCalendarMonth: (index) => { },
  daySelected: null,
  setDaySelected: (day) => { },
  showEventModal: false,
  setShowEventModal: () => { },
  showEventDescription: false,
  setShowEventDescription: () => { },
  labels: [],
  setLabels: () => { },
  updateLabel: () => {}
})

export default CalendarGlobalContext