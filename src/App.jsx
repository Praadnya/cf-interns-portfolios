//
// import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PraadnyaH from "./pages/profiles/PraadnyaH";
//import Dhatri from "./pages/profiles/Dhatri/Dhatri";
import DhatriLayout from "./pages/profiles/Dhatri/DComponents/DhatriLayout.jsx";
import DhatriHome from "./pages/profiles/Dhatri/dpages/DhatriHome.jsx";
import DhatriEducation from "./pages/profiles/Dhatri/dpages/DhatriEducation.jsx";
import DhatriExperience from "./pages/profiles/Dhatri/dpages/DhatriExperience.jsx";
import DhatriProjects from "./pages/profiles/Dhatri/dpages/DhatriProjects.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/praadnya-h" element={<PraadnyaH />}></Route>
        <Route path="/dhatri" element={<DhatriLayout />}>
          <Route index element={<DhatriHome />} />
          <Route path="education" element={<DhatriEducation />} />
          <Route path="experience" element={<DhatriExperience />} />
          <Route path="projects" element={<DhatriProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};


export default App;