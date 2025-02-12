import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PraadnyaH from "./pages/profiles/PraadnyaH";
import Jagadeesh from "./pages/profiles/Jagadeesh";

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/praadnya-h" element={<PraadnyaH />}></Route>
        <Route path="/Jagadeesh" element={<Jagadeesh />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;