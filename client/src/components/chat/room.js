import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./infobar";
import Input from "./input";
import Messages from "./messages";
import TextContainer from "./textContainer";

let socket;

let url;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    url = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/chat`;
  } else {
    url = "http://localhost:9000/backend/chat";
  }

export default function Chat() {
  const ENDPOINT = url;

  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket = io(ENDPOINT);
    // const { name, room } = queryString.parse(location.search);
    const name = "Joe";
    const room = "Makers";

    setRoom(room);
    setName(name);
    socket.emit("join", { name, room }, (error) => {
      if (error) alert(error);
    });
    return () => {
      socket.disconnect();
      socket.off();
    };
  }, [ENDPOINT]);

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
    <div>
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
