import React from "react";

import "./textContainer.css";

export default function TextContainer({ users }) {
  return (
    <div>
      {users ? (
        <div class="container">
          <h3>People Currently Chatting:</h3>
          <div class="section">
            <h5 class="flow-text" style={{ color: "hsla(232, 73%, 65%, 1)" }}>
              {users.map(({ name }) => (
                <div key={name}>{name}</div>
              ))}
            </h5>
          </div>
        </div>
      ) : null}
    </div>
  );
}
