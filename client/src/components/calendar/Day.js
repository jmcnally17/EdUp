import React, { useContext, useState, useEffect } from 'react'
import dayjs from 'dayjs'
import CalendarGlobalContext from '../../context/CalendarGlobalContext'
import Popup from 'reactjs-popup';


export default function Day({ day, _key, rowIdx, data }) {

  const Card = ({ title }) => (
    <div className="font-size: 12px width: 100% border-bottom 1px-solid-gray text-center">
      <div className="content">
        {title}
      </div>
    </div>
  );

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const {setDaySelected, setShowEventModal } = useContext(CalendarGlobalContext)
  return (
    <div className="border border-gray-200 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format('DD')}
        </p>
        {data.map((event) => {
          return (
            <Popup trigger={<button onClick={() => setOpen(o => !o)}>{event.day === day.format("DD") && event.month === day.format("MM") ? event.title : null}</button>}
            position="top center"
            closeOnDocumentClick>
            <Card title={event.description} />
          </Popup>
          )
        })}
      </header>
      <div className="flex-1 cursor-pointer" onClick={() => {
        setDaySelected(day)
        setShowEventModal(true)
      }}>
      </div>
    </div>
  )
}
