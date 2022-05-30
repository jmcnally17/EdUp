import "./css/materialize.css";
import "./css/materialize.min.css";
import "./css/style.css";
import 'material-icons/iconfont/material-icons.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/home.js";
import Noticeboard from "./components/noticeboard/noticeboard.js";
import New from "./components/noticeboard/new.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
        <Route path="/noticeboard/new" element={<New />} />
      </Routes>
    </div>
  );
}
