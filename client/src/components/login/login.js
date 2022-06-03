import React, { useState } from "react";
import illustration4 from "../../images/illustration4.png"
import Typed from "react-typed"

let urlSessions;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  urlSessions = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/sessions`;
} else {
  urlSessions = "http://localhost:9000/backend/sessions";
}

let urlUsers;
if (process.env.REACT_APP_HEROKU_TEST_URL) {
  urlUsers = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/users`;
} else {
  urlUsers = "http://localhost:9000/backend/users";
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
      .then((data) => setData(data));
  };

  return (
    <div>
      {/* <div className="container"> */}
      <section class="flex flex-col md:flex-row h-screen items-center">

<div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
  <img src={illustration4} alt="" class="w-full h-full object-cover" />
</div>

<div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

  <div class="w-full h-100 object-position: top;">
            <h5 className="font-bold font-serif object-position: top">Keeping you connected to your...</h5>
            <p><Typed className="font-serif"
      strings={[
                "Kids",
                "School",
                "Community"
          ]}
          typeSpeed={50}
          backSpeed={50}
          loop
        /></p>

    <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

    <form class="mt-6" action="#" method="POST">
      <div>
                <label class="block text-gray-700">Username</label>
                <input
              placeholder="Enter Username"
              onChange={(e) => setLoginUsername(e.target.value)}
                  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
                  </input>
      </div>

      <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setLoginPassword(e.target.value)}
              minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required></input>
      </div>

      {/* <div class="text-right mt-2">
        <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div> */}
              
      <button className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6" type="submit" name="action" onClick={login}>Log In</button>
    </form>

    <hr class="my-6 border-gray-300 w-full" />

    {/* <p class="mt-8">Need an account? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
            account</a></p> */}

            {/* <p class="text-sm text-gray-500 mt-12">&copy; 2022 EdUp - All Rights Reserved.</p>
            <h1>Get User</h1>
            <button onClick={getUser}>Submit</button>
            {data ? <h1>Welcome Back {data.username}</h1> : null} */}
          
  </div>
</div>

</section>
        {/* <h1>Login</h1>
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
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={login}>Submit
              <i className="material-icons right">send</i>  
            </button> */}
            
          {/* </div>
          <div> */}
           
      </div>  
    // </div>
  );
}