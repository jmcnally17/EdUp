import "./css/materialize.css";
import "./css/materialize.min.css";
import "./css/style.css";
import "material-icons/iconfont/material-icons.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Noticeboard from "./components/noticeboard/noticeboard.js";
import New from "./components/noticeboard/new.js";
import Sidenav from "./components/navbar/navbar";
import Header from "./components/header/header";
import SchoolFooter from "./components/footer/footer";
import Calendar from "./components/calendar/Calendar";
import Join from "./components/chat/join";
import Room from "./components/chat/room";
import Payments from "./components/payments/payments"
import Success from "./components/payments/success"
import Axios from "axios";

export default function App() {
  let urlUsers;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    urlUsers = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/users`;
  } else {
    urlUsers = "http://localhost:9000/backend/users";
  }

  const [user, setUser] = useState({});
  useEffect(() => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: urlUsers,
    }).then((res) => {
      setUser(res.data);
    });
  }, [urlUsers]);

  return (
    <React.Fragment>
      <div className="App">
        <Header />
        {user ? <Sidenav /> : null}
        <Routes>
          <Route path="/" element={<Login user={user} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/noticeboard" element={<Noticeboard />} />
          <Route path="/noticeboard/new" element={<New />} />
          <Route path="/calendar" element={<Calendar user={user}/>} />
          <Route path="/payments" element={<Payments user={user}/>} />
          <Route path="/chat" element={<Join />} />
          <Route path="/chat/room" element={<Room />} />
          <Route path="/success" element={<Success />} />
        </Routes>
        <SchoolFooter />
      </div>
    </React.Fragment>
  );
}
