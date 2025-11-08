// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Placements from "./pages/Placements";
import Faculties from "./pages/Faculties";
import Departments from "./pages/Departments";
import Contact from "./pages/Contact";
import Gallery from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/faculties" element={<Faculties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

      </Routes>
    </Router>
  );
};

export default App;
