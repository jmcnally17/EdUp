import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleName = (target) => {
    setName(target.value);
  };

  const handleRoom = (target) => {
    setRoom(target.value);
  };

  const handleClick = (e) => (room && name ? null : e.preventDefault());

  return (
    <div className="container">
      <h1>Join</h1>
      <div>
        <input placeholder="Name" type="text" onChange={handleName} />
      </div>
      <div>
        <input placeholder="Room" type="text" onChange={handleRoom} />
      </div>
      <Link to={`/chat?name=${name}&room=${room}`} onClick={handleClick}>
        <button type="submit">Sign in</button>
      </Link>
    </div>
  );
}
