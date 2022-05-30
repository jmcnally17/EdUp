import React, {useState} from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const User = () => {
    fetch("http://localhost:9000/sessions", {
      method: "post",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          email,
          password
      })
    }).then(response => console.log(response.data))
    .then(data => {
      
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
        <button onClick={User}> Submit </button>
      </div>
  </div>
  )
}

export default Login;
