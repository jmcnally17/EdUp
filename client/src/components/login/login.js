import React, { useState } from "react";
import Axios from "axios";

let urlSessions;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  urlSessions = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/sessions`;
} else {
  urlSessions = "http://localhost:9000/backend/sessions";
}

export default function Login({user}) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: urlSessions,
    }).then((res) => console.log('hi'));
  };

  return (
    <div>
      <div className="container">
        <h1>Login</h1>
        <div className="input-field col s12">
          <h4>Username</h4>

          <input
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          ></input>
          <h4>Password</h4>
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          ></input>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
            onClick={login}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
        <div>
          <h1>Get User</h1>
          {user ? <h1>Welcome Back {user.username}</h1> : null}
        </div>
      </div>
    </div>
  );
}
