import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Kousthubha from "./pages/profiles/Kousthubha/KousthuhbaHome";

import Avani from "./pages/profiles/Avani";
import PraadnyaH from "./pages/profiles/Praadnya/MainApp";
import Ujwal from "./pages/profiles/Ujwal";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/avani" element={<Avani />}></Route>
        <Route path="/praadnya-h" element={<PraadnyaH />}></Route>
        <Route path="/kousthubha" element={<Kousthubha />}></Route>
        <Route path="/ujwal" element={<Ujwal Harish />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;