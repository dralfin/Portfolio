import React from "react";
import { Routes, Route } from "react-router-dom"; // Importe esses arquivos
 
import Home from "../../views/Home";
import Projects from "../../views/Projects";
import About from "../../views/About";
 
const Content = props => (
  <main className="Content">
    {/* Toda essa parte está diferente da do professor, analisem as diferenças */}
    <Routes>
      <Route path="/about" element={<About  />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
    {/* --------------------------------------------------- */}
  </main>
);
 
export default Content;