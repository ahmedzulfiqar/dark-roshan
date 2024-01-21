import React, { useEffect } from "react";
import About from "../pages/About";
import {
  Routes,
  Route,
  redirect,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layout/Header";
import Portfolio from "../pages/Portfolio";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Portfoliodata from "../data/portfoliodata";

function Routerfile() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div className="row m-0">
        <div className="col-12 p-0">
          <Header />
          <div className="marginset">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route
                path="/portfolio"
                element={<Portfolio data={Portfoliodata[0]} />}
              />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              {Portfoliodata.map((i) => {
                return (
                  <Route path={`/${i.path}`} element={<Portfolio data={i} />} />
                );
              })}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Routerfile;
