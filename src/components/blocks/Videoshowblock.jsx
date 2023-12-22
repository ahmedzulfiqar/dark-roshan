import React from "react";

function Videoshowblock() {
  return (
    <div
      className="row m-0  py-md-3 py-0  justify-content-center -hidden"
      style={{ height: "auto" }}
    >
      <div className="col-lg-12 px-0 col-12 py-0 text-md-center text-start">
        <div style={{ position: "relative" }}>
          <video
            src="https://deepstudio.info/wp-content/uploads/2023/01/15.DEEP-DUBAI-BTS.mp4"
            autoPlay={true}
            className="p-0 m-0 promovideo"
            muted
            loop
          ></video>
          <div
            className="div videocover d-flex align-items-center justify-content-center"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <button className="btn text-light">
              <i className="fa fa-play display-1" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videoshowblock;
