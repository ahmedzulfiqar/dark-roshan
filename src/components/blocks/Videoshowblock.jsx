import React from "react";

function Videoshowblock() {
  return (
    <div
      className="row m-0  py-md-0 py-0 Videoshowblock   justify-content-cente position-relative z-3 overflow-hidden"
      style={{ height: "60vh" }}
    >
      <div className="col-lg-12 px-0  col-12 py-0 text-md-center text-start h-100">
        <div style={{ position: "relative" }} className="h-100">
          <video
            src="https://deepstudio.info/wp-content/uploads/2023/01/15.DEEP-DUBAI-BTS.mp4"
            autoPlay={true}
            className="p-0 m-0 promovideo position-absolute z-1"
            muted
            loop
          ></video>
          <div className="div text-center  mt-md-1 mt-0 buttonvover w-100 d-flex  h-100 align-items-center justify-content-center">
            <div className="d-block  w-100">
              <div className="display-5 fw-bold text-light shadows text-uppercase mt-md-4">
                Roshan Studio <br />{" "}
                <span className="text-main">Demo Reel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videoshowblock;
