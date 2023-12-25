import React from "react";
import About from "../pages/About";
import { Routes, Route, redirect, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layout/Header";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
function Routerfile() {
  return (
    <>
      <div className="row m-0">
        <div className="col-12 p-0">
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Routerfile;
