import React, { useState, useEffect } from "react";
import logo from "../../logo.svg";

const url = process.env.REACT_APP_HEROKU_TEST_URL || "http://localhost:9000/testApi";

export default function Home() {
  const [data, setData] = useState();

  const callAPI = () => {
    fetch(url)
      .then((res) => res.text())
      .then((res) => setData(res))
      .catch((err) => err);
  }

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">{data}</p>
    </div>
  )
}