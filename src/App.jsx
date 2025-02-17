import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PraadnyaH from "./pages/profiles/PraadnyaH";
import RashmiPR from "./pages/profiles/RashmiPR";

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/praadnya-h" element={<PraadnyaH />}></Route>
        <Route path="/rashmi-p-r" element={<RashmiPR />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;