import "./css/materialize.css";
import "./css/materialize.min.css";
import "./css/style.css";
import 'material-icons/iconfont/material-icons.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import Registration from "./components/registration/registration";
import Noticeboard from "./components/noticeboard/noticeboard.js";
import New from "./components/noticeboard/new.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
        <Route path="/noticeboard/new" element={<New />} />
      </Routes>
    </div>
  );
}
