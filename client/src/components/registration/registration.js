import React, { useState } from "react";

let url;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  url = `${process.env.REACT_APP_HEROKU_TEST_URL}users`;
} else {
  url = "http://localhost:9000/users";
}

export default function Registration() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = () => {
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
      }),
    }).then((response) => console.log(response.body));
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      ></input>
      <button onClick={register}>Submit</button>
    </div>
  );
}