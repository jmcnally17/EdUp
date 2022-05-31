import React, { useState } from "react";

let urlSessions;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  urlSessions = `${process.env.REACT_APP_HEROKU_TEST_URL}sessions`;
} else {
  urlSessions = "http://localhost:9000/sessions";
}

let urlUsers;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  urlUsers = `${process.env.REACT_APP_HEROKU_TEST_URL}users`;
} else {
  urlUsers = "http://localhost:9000/users";
}

export default function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const login = () => {
    fetch(urlSessions, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    fetch(urlUsers, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => console.log(setData(data)));
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <input
          placeholder="username"
          onChange={(e) => setLoginUsername(e.target.value)}
        ></input>
        <input
          type="password"
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
