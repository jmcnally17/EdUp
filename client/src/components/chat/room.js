import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./infobar";
import Input from "./input";
import Messages from "./messages";
import TextContainer from "./textContainer";

let socket;

export default function Chat({ location }) {
  let url;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    url = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/chat`;
  } else {
    url = "http://localhost:9000/backend/chat";
  }

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket = io(url);
    const { name, room } = queryString.parse(location.search);

    setRoom(room);
    setName(name);
    socket.emit("join", { name, room }, (error) => {
      if (error) alert(error);
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [url, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  function sendMessage(event) {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  }

  return (
    <div className="container">
      <div>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        ></Input>
      </div>
      <TextContainer users={users} />
    </div>
  );
}
