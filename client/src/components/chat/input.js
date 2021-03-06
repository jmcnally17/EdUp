import React from "react";

import "./input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      aria-label="message"
      className="input"
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />

    <button
      className="btn waves-effect waves-light"
      type="submit"
      name="action"
      onClick={(e) => sendMessage(e)}
    >
      Send
      <i className="material-icons right">send</i>
    </button>
  </form>
);

export default Input;
