import React, { useState } from "react";
import "./App.css";
import { LiveStream, HomePage, DescriptionPage, Gallery } from "./Components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App w-full border-none h-screen">
      <Routes>
        <Route exact path="/console" element={<HomePage />}></Route>
        <Route exact path="/" element={<LiveStream />}></Route>
        <Route exact path="/gallery" element={<Gallery />}></Route>
        <Route exact path="/description" element={<DescriptionPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
