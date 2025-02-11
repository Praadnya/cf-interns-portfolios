//
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PraadnyaH from "./pages/profiles/PraadnyaH";
//import Dhatri from "./pages/profiles/Dhatri/Dhatri";
import DhatriLayout from "./pages/profiles/Dhatri/DComponents/DhatriLayout.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/praadnya-h" element={<PraadnyaH />}></Route>
        <Route path="/dhatri" element={<DhatriLayout />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;