import React, { useContext } from 'react'
import CalendarGlobalContext from '../../context/CalendarGlobalContext'
import "../../index.css";

export default function CreateEventButton() {
  const {setShowEventModal} = useContext(CalendarGlobalContext)
  return (
    <button onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl" >
    <span className="pl-3 pr-4">Create</span>
  </ button>
  );
}
