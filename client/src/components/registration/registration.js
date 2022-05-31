import React, { useState } from "react";

export default function Registration() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

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

  return (
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
  );
}