import React, { useState } from "react";
import Axios from "axios";
import illustration4 from "../../images/illustration4.png";
import Typed from "typed.js";

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

export default function Login({ user }) {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const TypedString = () => {
    const el = React.useRef(null);

    const typed = React.useRef(null);

    React.useEffect(() => {
      const options = {
        strings: ["Kids", "School", "Community"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      };

      typed.current = new Typed(el.current, options);

      return () => {
        typed.current.destroy();
      };
    }, []);
    return (
      <div className="type-wrap font-serif">
        <span style={{ whiteSpace: "pre" }} ref={el} />
      </div>
    );
  };

  const login = (err, data) => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: urlSessions,
    })
      .catch(error => {
        window.alert("Invalid credentials. Please try again")
      }).then(() => {
        window.location.href = `${loggedInSession}`;
      })
  };

  const loginForm = () => {
    return (
      <div>
        <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
          Log in to your account
        </h1>
        <div>
          <label className="block text-gray-700">Username</label>
          <input
            aria-label="username"
            placeholder="Enter Username"
            onChange={(e) => setLoginUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
            autoFocus
            required
          ></input>
        </div>
        <div className="mt-4">
          <label className="block text-gray-700">Password</label>
          <input
            aria-label="password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setLoginPassword(e.target.value)}
            minLength="6"
            className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
            focus:bg-white focus:outline-none"
            required
          ></input>
        </div>
        <button
          className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
          px-4 py-3 mt-6"
          type="submit"
          name="action"
          onClick={login}
        >
          Log In
        </button>
      </div>
    );
  };

  const welcomeBack = () => {
    return <h5>Welcome Back {user.username}</h5>;
  };

  return (
    <div>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src={illustration4}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100 object-position: top;">
            <h5 className="font-bold font-serif object-position: top">
              Keeping you connected to your...
            </h5>

            <TypedString />

            {user ? welcomeBack() : loginForm()}
            <hr className="my-6 border-gray-300 w-full" />
            <p className="text-sm text-gray-500 font-serif mt-12">
              &copy; 2022 EdUp - All Rights Reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
