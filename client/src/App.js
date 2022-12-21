import "./css/materialize.css";
import "./css/materialize.min.css";
import "./css/style.css";
import "material-icons/iconfont/material-icons.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Noticeboard from "./components/noticeboard/noticeboard";
import New from "./components/noticeboard/new.js";
import Sidenav from "./components/navbar/navbar.js";
import SchoolFooter from "./components/footer/footer";
import Calendar from "./components/calendar/calendar";
import Join from "./components/chat/join";
import Room from "./components/chat/room";
import Payments from "./components/payments/payments";
import Success from "./components/payments/success";
import Axios from "axios";
import Qrcode from "./components/qrcode/qrcode";
import UpdatePassword from "./components/registration/updatePassword";
import ParentRegistration from "./components/registration/registrationParent";

export default function App() {
  let urlUsers;
  if (process.env.REACT_APP_URL) {
    urlUsers = `${process.env.REACT_APP_URL}/backend/users`;
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
        <div className="flex flex-col min-h-screen">
          {user ? <Sidenav user={user} /> : null}
          <Routes>
            <Route path="/" element={<Login user={user} />} />
            <Route path="/registration" element={<Registration />} />
            <Route
              path="/noticeboard"
              element={user ? <Noticeboard user={user} /> : <Navigate to="/" />}
            />
            <Route
              path="/noticeboard/new"
              element={
                user ? <New user={user} /> : <Navigate to="/noticeboard" />
              }
            />
            <Route
              path="/payments"
              element={user ? <Payments user={user} /> : <Navigate to="/" />}
            />
            <Route
              path="/chat"
              element={user ? <Join user={user} /> : <Navigate to="/" />}
            />
            <Route
              path="/chat/room"
              element={user ? <Room /> : <Navigate to="/" />}
            />
            <Route
              path="/success"
              element={user ? <Success /> : <Navigate to="/" />}
            />
            <Route
              path="/qrcode"
              element={user ? <Qrcode user={user} /> : <Navigate to="/" />}
            />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
              path="/updatePassword"
              element={
                user ? <UpdatePassword user={user} /> : <Navigate to="/" />
              }
            />
            <Route
              path="/parent-registration"
              element={
                user ? <ParentRegistration user={user} /> : <Navigate to="/" />
              }
            />
            <Route
              path="/calendar"
              element={user ? <Calendar user={user} /> : <Navigate to="/" />}
            />
            ;
          </Routes>
          <SchoolFooter />
        </div>
      </div>
    </React.Fragment>
  );
}
