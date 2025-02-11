import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PraadnyaH from "./pages/profiles/PraadnyaH";
import KeshavPortfolio from "./pages/profiles/KeshavPortfolio";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/praadnya-h" element={<PraadnyaH />} />
        <Route path="/photo-h" element={<KeshavPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
