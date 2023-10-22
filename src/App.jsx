import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail";

import HostLayout from "./components/HostLayout";

import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income";
import HostVans from "./pages/Host/HostVans/HostVans";

import HostVanDetail from "./pages/Host/HostVans/HostVanDetail";
import Details from "./pages/Host/HostVans/Details";
import Pricing from "./pages/Host/HostVans/Pricing";
import Photos from "./pages/Host/HostVans/Photos";

import Reviews from "./pages/Host/Reviews";

import "./server";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/VanLife/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host/" element={<HostLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<Navigate to="details" />} />
              <Route path="details" element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>
            
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
