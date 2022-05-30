import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./components/home/home.js";
import Noticeboard from "./components/noticeboard/noticeboard.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticeboard" element={<Noticeboard />} />
      </Routes>
    </div>
  );
}
