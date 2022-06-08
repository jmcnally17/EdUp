import React, { useState } from "react";
import Axios from "axios";

let url;
if (process.env.REACT_APP_HEROKU_URL) {
  url = `${process.env.REACT_APP_HEROKU_URL}/backend/users`;
} else {
  url = "http://localhost:9000/backend/users";
}

export default function Registration() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");

  let urlSessions;
  if (process.env.REACT_APP_HEROKU_URL) {
    urlSessions = `${process.env.REACT_APP_HEROKU_URL}/backend/sessions`;
  } else {
    urlSessions = "http://localhost:9000/backend/sessions";
  }

  let loggedInSession;
  if (process.env.REACT_APP_HEROKU_URL) {
    loggedInSession = `${process.env.REACT_APP_HEROKU_URL}/noticeboard`;
  } else {
    loggedInSession = "http://localhost:3000/noticeboard";
  }

  const login = (user, pass) => {
    Axios({
      method: "POST",
      data: {
        username: user,
        password: pass,
      },
      withCredentials: true,
      url: urlSessions,
    })
      .catch((err) => {
        window.alert("User already exists");
        throw err;
      })
      .then(() => {
        window.location.href = `${loggedInSession}`;
      });
  };

  const register = () => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
        admin: true,
        phone: registerPhoneNumber,
      }),
    }).then((res) => {
      login(registerUsername, registerPassword);
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Register</h1>
        <div className="input-field col s12">
          <h4>Username</h4>
          <input
            aria-label="username"
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          ></input>
          <h4>Password</h4>
          <input
            aria-label="password"
            type="password"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          ></input>
          <h4>Phone Number</h4>
          <input
            type="text"
            placeholder="Phone Number"
            onChange={(e) => setRegisterPhoneNumber(e.target.value)}
          ></input>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={register}
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
      <div className="row center"></div>
      <div className="row center"></div>
    </div>
  );
}
