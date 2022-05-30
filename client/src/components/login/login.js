import React, {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    fetch("http://localhost:9000/sessions", {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          email,
          password
      })
    }).then(response => response.json())
    .then(data => {
      localStorage.setItem("user", JSON.stringify(data.user))
    })
  }

  return (
    <div>
      <div>
        <label htmlFor="emailInput">Email</label>
        <input id="emailInput" onChange = {(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="passwordInput">Password</label>
        <input id="passwordInput" type="password" onChange = {(p) => setPassword(p.target.value)} />
      </div>
      <div>
        <button onClick={handleSubmit}> Submit </button>
      </div>
  </div>
  )
}

export default Login;
