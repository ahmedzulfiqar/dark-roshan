import React, { useState } from "react";
import List from "../atoms/List";
import Mobilelist from "../atoms/Mobilelist";

function Navbar() {
  const [open, setopen] = useState(false);
  return (
    <>
      <div className="col-12 bg-primarys px-md-2 px-0 ps-3">
        <div className="mx-auto px-md-5 widths ">
          <div className="row m-0 py-xl-4 py-3   justify-content-between ">
            <div className="col-xl-5 col-9 text-start  p-0  align-self-center">
              <div className="display-6  d-xl-block d-none text-light fw-bold text-uppercase align-self-center">
                <span className="text-main ">Webdevify</span> Studio
              </div>
              <div className="fs-5  ps-0 d-xl-none d-block text-light fw-bold text-uppercase align-self-center">
                <span className="text-main ">Webdevify</span> Studio
              </div>
            </div>
            <List open={open} setopen={setopen} />
          </div>
        </div>
      </div>
      <Mobilelist open={open} setopen={setopen} />
    </>
  );
}

export default Navbar;
