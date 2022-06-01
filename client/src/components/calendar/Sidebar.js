import React from 'react'
import CreateEventButton from './CreateEventButton'
import SmallCalendar from './SmallCalendar'
import Label from './Label'

export default function Sidebar() {
  return (
    <aside className="border p-5 w-72">
      <CreateEventButton />
      <SmallCalendar />
      <Label />
    </aside>
  )
}
