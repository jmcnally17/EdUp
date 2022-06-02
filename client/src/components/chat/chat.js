import { useState, useEffect } from "react";
import { io } from "socket.io-client";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/chat`;
} else {
  url = "http://localhost:9000/backend/chat";
}

export default function Chat() {
  const [data, setData] = useState("");
  const [time, setTime] = useState("fetching");

  useEffect(() => {
    async function fetchTest() {
      let response = await fetch(url);
      response = await response.json();
      setData(response.test);
    }
    fetchTest();
  }, []);

  useEffect(() => {
    const socket = io("http://localhost:9000");

    socket.on("connect", () => console.log(socket.id));
    socket.on('connect_error', () => {
      setTimeout(() => socket.connect(), 5000)
    });

    socket.on("time", (data) => setTime(data));
    socket.on("disconnect", () => setTime("server disconnected"));
  }, []);

  return (
    <div>
      <h1>{data}</h1>
      <h2>{time}</h2>
    </div>
  );
}
