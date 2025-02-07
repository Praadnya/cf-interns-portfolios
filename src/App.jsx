import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PraadnyaH from "./pages/profiles/PraadnyaH";
import Aditi from "./pages/profiles/Aditi";
import AditiGoyal from "./pages/profiles/AditiGoyal/AditiGoyal";

const App = () => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/praadnya-h" element={<PraadnyaH />}></Route>
          <Route path="/aditi-goyal" element={<Aditi />}></Route>
          <Route path="/aditi" element={<AditiGoyal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
