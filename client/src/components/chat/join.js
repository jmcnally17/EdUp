import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Join({ user }) {
  const [name, _setName] = useState("");
  const [room, setRoom] = useState("");

  const handleRoom = ({ target }) => {
    setRoom(target.value);
  };

  const chatRooms = ["Admin", "Finance", "Class X", "Class Y", "Class Z"];

  return (
    <div>
      <h1>Join</h1>
      <select className="browser-default" onChange={handleRoom}>
        <option hidden value="">
          Select chat room
        </option>
        {chatRooms.map((chatRoom) => (
          <option key={chatRoom} value={chatRoom}>
            {chatRoom}
          </option>
        ))}
      </select>
      <Link to={`/chat/room?name=${user.username}&room=${room}`}>
        <button type="submit">Sign in</button>
      </Link>
    </div>
  );
}
