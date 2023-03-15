import React, { useState } from "react";
import "./App.css";
import { Display, Info } from "./Components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App w-full border-none h-screen">
      <Routes>
        <Route exact path="/console" element={<Display />}></Route>
        <Route exact path="/" element={<Info />}></Route>
      </Routes>
    </div>
  );
};

export default App;
