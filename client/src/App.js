import "./App.css";
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from "./components/login/login";
import Registration from "./components/registration/registration";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}
