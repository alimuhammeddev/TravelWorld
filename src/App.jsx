import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Tours from "./Pages/Tours";
import ScrollToTop from "./ScrollToTop";
import About from "./Pages/About";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
