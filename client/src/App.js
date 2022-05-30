import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/home.js";
import Noticeboard from "./components/noticeboard/noticeboard.js";
import { getMonth } from './util'
import Calendar from "./components/calendar/Calendar";

export default function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Calendar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
        </Routes>
        
      </div>
      </React.Fragment>
  );
}
