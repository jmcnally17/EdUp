import React, { useState } from "react";

let url;
if (process.env.REACT_APP_HEROKU_URL) {
  url = `${process.env.REACT_APP_HEROKU_URL}/backend/users/updatePassword`;
} else {
  url = `http://localhost:9000/backend/users/updatePassword/`
}

export default function UpdatePassword({user}) {
  const [password, setRegisterPassword] = useState("");

  const alert = () => {
    window.alert("Password has been updated");
  };

  const update = () => {
    console.log(user.id)
    fetch(url, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: password,
        id: user.id
      })
    });
    alert()
  }

  return (
    <div>
      <div className="container">
        <h1>Update your password</h1><br></br>
        <div className="input-field col s12">
          <h4>New password</h4>
          <input
            aria-label="password"
            type="password"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          ></input>
        </div>
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
          onClick={update}
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
