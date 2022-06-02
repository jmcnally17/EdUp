import "./css/materialize.css";
import "./css/materialize.min.css";
import "./css/style.css";
import "material-icons/iconfont/material-icons.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Noticeboard from "./components/noticeboard/noticeboard.js";
import New from "./components/noticeboard/new.js";
import Sidenav from "./components/navbar/navbar";
import Header from "./components/header/header";
import SchoolFooter from "./components/footer/footer";
import Calendar from "./components/calendar/Calendar";
import Chat from "./components/chat/chat";

export default function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/noticeboard" element={<Noticeboard />} />
          <Route path="/noticeboard/new" element={<New />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
        <SchoolFooter />
      </div>
    </React.Fragment>
  );
}
