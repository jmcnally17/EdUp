import "./App.css";
import React, { useState } from "react";
// import Axios from "axios";

function App() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    fetch("http://localhost:9000/register", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
      }),
    }).then((response) => console.log(response.body));
  };

  const login = () => {
    fetch("http://localhost:9000/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    }).then((res) => console.log(res));
  };

  // const login = () => {
  //   Axios({
  //     method: "POST",
  //     data: {
  //       username: loginUsername,
  //       password: loginPassword,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:9000/login",
  //   }).then((res) => console.log(res));
  // };

  const getUser = () => {
    fetch("http://localhost:9000/user", {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      // console.log(res.data.username);
      JSON.parse(res).then((res) => {
        console.log(res.data);
        console.log(data.data);
        setData(res.data);
      });
    });
  };

  // const getUser = () => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "http://localhost:9000/user",
  //   }).then((res) => {
  //     setData(res.data);
  //     console.log(res.data);
  //   });
  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        ></input>
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        ></input>
        <input
          placeholder="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        ></input>
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default App;
