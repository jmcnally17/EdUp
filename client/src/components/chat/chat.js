import { useState, useEffect } from "react";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/chat`;
} else {
  url = "http://localhost:9000/backend/chat";
}

export default function Chat() {
  const [data, setData] = useState("");
  const helloWorld = () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    helloWorld();
  }, []);

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
