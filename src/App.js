import React from "react";
import MainImg from "./component/MainImg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainBoard from "./component/MainBoard";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainImg/>} />
        <Route path="/Board" element={<MainBoard />} />
      </Routes>
    </div>
  );
}

export default App;
