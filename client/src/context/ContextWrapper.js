import React, {useState} from 'react'
import CalendarGlobalContext from './CalendarGlobalContext'
import dayjs from 'dayjs'
export default function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month())
  return (
    <CalendarGlobalContext.Provider value={{ monthIndex, setMonthIndex }}>
      {props.children}
    </CalendarGlobalContext.Provider>
  )
}
