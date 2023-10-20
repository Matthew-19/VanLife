import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// import Host from "./pages/Host";
import About from "./pages/About";
import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./server";

export default function App() {
  // <Route path="/host" element={<Host />} />
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/VanLife/" element={<Home />} />
        <Route path="/VanLife/about" element={<About />} />
        <Route path="/VanLife/vans" element={<Vans />} />
        <Route path="/VanLife/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
