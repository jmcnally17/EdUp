import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/home.js";
import Noticeboard from "./components/noticeboard/noticeboard.js";
import Calendar from "./components/calendar/Calendar";

export default function App() {
  return (
    <React.Fragment>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/noticeboard" element={<Noticeboard />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        
      </div>
      </React.Fragment>
  );
}
