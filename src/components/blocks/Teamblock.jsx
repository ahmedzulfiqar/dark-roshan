import React from "react";

function Teamblock() {
  return (
    <div className="col-12 p-0 mt-3">
      <div className="row m-0 m-0 bg-primarys py-md-3 py-3 justify-content-center px-2">
        <div className="col-lg-8 col-12 py-2 text-lg-center text-start">
          <div className="fs-1 text-uppercase d-lg-block d-none text-light fw-bolder">
            OUR TEAM
          </div>
          <div className="fs-3 text-uppercase d-lg-none d-block text-light fw-bolder">
            OUR TEAM
          </div>
          <hr
            className="bg-main opacity-100 border-0  mx-lg-auto w-25"
            style={{ height: ".1px" }}
          />
          <p className="text-light mt-md-4 mt-3 d-lg-block d-none opacity-75">
            Deep studio is a mix of experts and professionals working
            collaboratively to provide you best quality.
          </p>
          <p className="text-light mt-md-4 mt-0 d-lg-none d-block small opacity-75">
            Deep studio is a mix of experts and professionals working
            collaboratively to provide you best quality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Teamblock;
