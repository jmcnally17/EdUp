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
       <div class="container">
      <h1>Register</h1>
      <div class="input-field col s12">
        <h4>Username</h4>
      <input
        placeholder="username"
        onChange={(e) => setRegisterUsername(e.target.value)}
      ></input>
      <h4>Password</h4>
      <input
        type="password"
        placeholder="password"
        onChange={(e) => setRegisterPassword(e.target.value)}
      ></input>
      </div>
      <button class="btn waves-effect waves-light" type="submit" name="action" onClick={register}>Submit
      <i class="material-icons right">send</i>  
      </button>
      </div>
      <div class="row center"></div>
          <div class="row center"></div>
    </div>
  );
}