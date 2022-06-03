import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Label from "./Label";

export default function Sidebar({ user }) {
  return (
    <aside className="border p-5 w-72">
      {user.admin ? <CreateEventButton /> : null}
      <SmallCalendar />
      <Label />
    </aside>
  );
}
