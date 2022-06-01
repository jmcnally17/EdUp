import React, { useContext } from 'react'
import CalendarGlobalContext from '../../context/CalendarGlobalContext'
import { labelClasses } from "./EventModal"


export default function Label() {
  return (
    <div>
      <br></br>
       <button disabled className={`bg-white-200 w-full text-gray-500 font-bold mt-10"`}>Departments</button>
      <br>
      </br>
      <br>
      </br>
      <button disabled className={`bg-indigo-200 w-full`}>General</button>
      <button disabled className={`bg-red-200 w-full`}>Maths</button>
      <button disabled className={`bg-blue-200 w-full`}>Sports</button>
      <button disabled className={`bg-green-200 w-full`}>Languages</button>
      <button disabled className={`bg-purple-200 w-full`}>History</button>
      <button disabled className={`bg-gray-200 w-full`}>Geography</button>
    </div>
  )
}