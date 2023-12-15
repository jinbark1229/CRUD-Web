import React from "react";
import MainImg from "./component/MainPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SLPS from "./page/Alps";
import Seafood from "./page/Seafood";
import LatestTrends from "./page/LastestTrends";
import Reference from "./page/Reference";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainImg />} />
        <Route path="/Alps" element={<SLPS />}></Route>
        <Route path="/Seafood" element={<Seafood />}></Route>
        <Route path="/LatestTrends" element={<LatestTrends />}></Route>
        <Route path="/Reference" element={<Reference />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
