import React from "react";
import socketClient from "socket.io-client";
import Chat from "./chat";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = process.env.REACT_APP_HEROKU_TEST_URL;
} else {
  url = "http://localhost:9000";
}

export default function ChatParent() {
  var socket = socketClient(url);
  socket.on("connection", () => {
    console.log("I'm connected with backend");
  });

  return <Chat />;
}
