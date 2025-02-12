import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PraadnyaH from "./pages/profiles/PraadnyaH"; // if applicable
import Kenny from "./pages/profiles/Kenny/Kenny";
import KennyPersonal from "./pages/profiles/Kenny/personal";
import KennyEducation from "./pages/profiles/Kenny/education";
import KennyExperiences from "./pages/profiles/Kenny/experience";
import KennyProjects from "./pages/profiles/Kenny/projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/praadnya-h" element={<PraadnyaH />} />
        {/* Kenny route with nested child routes */}
        <Route path="/kenny" element={<Kenny />}>
          {/* Optional index route – shown when /kenny is loaded and no child is selected */}
          <Route index element={<div>Select a section to view details.</div>} />
          <Route path="personal" element={<KennyPersonal />} />
          <Route path="education" element={<KennyEducation />} />
          <Route path="experiences" element={<KennyExperiences />} />
          <Route path="projects" element={<KennyProjects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;