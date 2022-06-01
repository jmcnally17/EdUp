import React, { useContext, useState, useEffect } from 'react'
import dayjs from 'dayjs'
import CalendarGlobalContext from '../../context/CalendarGlobalContext'
import Popup from 'reactjs-popup';

export default function Day({ day, _key, rowIdx, data }) {

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'bg-blue-600 text-white rounded-full w-7'
      : ''
  }
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
          let shorten;
          if (event.title.length > 12) {
            shorten = `${event.title.slice(0,12)}...`
          } else {
            shorten = event.title
          }
          
          return (
            <Popup trigger={<button>{event.day === day.format("DD") && event.month === day.format("MM") && event.year === day.format("YY") ? shorten : null}</button>}
            position="top"
              on="click">
              <div>
                <div class="col s12 m7 width-2">
                  <div class="card horizontal">
                    <div class="card-image">
                    </div>
                    <div class="card-stacked">
                      <div class="card-content">
                        <p className="font-bold">{event.title}:</p>
                        <p>{event.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
