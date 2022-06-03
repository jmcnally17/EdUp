import React, { useEffect } from "react";

import "./TextContainer.css";

export default function TextContainer({ users }) {
  return (
    <div>
      {users ? (
        <div>
          <h1>People Currently Chatting:</h1>
          <div>
            <h2 style={{ color: "hsla(232, 73%, 65%, 1)" }}>
              {users.map(({ name }) => (
                <div key={name}>{name}</div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}
