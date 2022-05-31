import React from 'react'

const CalendarGlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {}
})

export default CalendarGlobalContext