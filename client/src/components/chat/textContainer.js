import React from "react";

import "./textContainer.css";

export default function TextContainer({ users }) {
  return (
    <div>
      {users ? (
        <div className="container">
          <h3>People Currently Chatting:</h3>
          <div className="section">
            <h5
              className="flow-text"
              style={{ color: "hsla(232, 73%, 65%, 1)" }}
            >
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
