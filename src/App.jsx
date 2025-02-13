//
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import VarunS from "./pages/profiles/VarunS";
import Harshita from "./pages/profiles/Harshita/Harshita";
import AditiGoyal from "./pages/profiles/AditiGoyal/AditiGoyal";
import Chinthana from "./pages/profiles/Chinthana";
import DhatriLayout from "./pages/profiles/Dhatri/DComponents/DhatriLayout.jsx";
import Rickvi from "./pages/profiles/Rickvi";
import Kousthubha from "./pages/profiles/Kousthubha/KousthuhbaHome";
import Avani from "./pages/profiles/Avani";
import PraadnyaH from "./pages/profiles/Praadnya/MainApp";
import Ujwal from "./pages/profiles/Ujwal";
import Aditya from "./pages/profiles/Aditya";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/avani" element={<Avani />}></Route>
        <Route path="/praadnya-h" element={<PraadnyaH />}></Route>
        <Route path="/varuns" element={<VarunS />}></Route>
        <Route path="/Harshita-Khajuria" element={<Harshita />}></Route>
        <Route path="/chinthana-mj" element={<Chinthana />}></Route>
        <Route path="/dhatri" element={<DhatriLayout />}></Route>
        <Route path="/rickvi" element={<Rickvi />}></Route>
        <Route path="/kousthubha" element={<Kousthubha />}></Route>
        <Route path="/ujwal" element={<Ujwal Harish />}></Route>
        <Route path="/Aditi" element={<AditiGoyal />}></Route>
        <Route path="/aditya" element={<Aditya />}></Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;
