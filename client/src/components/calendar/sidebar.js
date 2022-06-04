import React from "react";
import CreateEventButton from "./createEventButton";
import SmallCalendar from "./smallCalendar";
import Label from "./label";

export default function Sidebar({ user, filter }) {
  return (
    <aside className="border p-5 w-72">
      {user.admin ? <CreateEventButton /> : null}
      <SmallCalendar />
      <Label filter={filter}/>
    </aside>
  );
}
