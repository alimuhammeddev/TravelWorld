import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import ScrollToTop from "./ScrollToTop";
import About from "./Pages/About";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </div>
  );
}

export default App;
