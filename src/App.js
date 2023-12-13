import React from "react";
import MainImg from "./component/MainImg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import SLPS from "./page/SLPS";
import Seafood from "./page/Seafood";
import New from "./page/New";
import Reference from "./page/Reference";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainImg/>} />
        <Route path="/Alps" element={<SLPS/>}></Route>
        <Route path="/Seafood" element={<Seafood/>}></Route>
        <Route path="/New" element={<New/>}></Route>
        <Route path="/Reference" element={<Reference/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
