import React from "react";
import image1 from "../media/photo-1419242902214-272b3f66ee7a.webp";
function Truestedblock() {
  return (
    <div
      className="col-12 p-0  shadow-sm"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="row m-0 m-0 py-md-5 py-3 justify-content-center px-2"
        style={{ backgroundColor: "#f3f3f394" }}
      >
        <div className="col-lg-8 col-12 py-2 text-lg-center text-start">
          <div className="fs-1 text-uppercase d-lg-block d-none text-light fw-bolder">
            PROJECTS
          </div>
          <div className="fs-3 text-uppercase d-lg-none d-block text-light fw-bolder">
            PROJECTS
          </div>
          <hr
            className="bg-main opacity-100 border-0  mx-lg-auto w-25"
            style={{ height: ".1px" }}
          />
          <p className="text-light mt-md-4 mt-3 d-lg-block d-none opacity-75">
            Roshan Studio is your trusted partner Let us transform your ideas
            into visually stunning realities.
          </p>
          <p className="text-light mt-md-4 mt-0 d-lg-none d-block small opacity-75">
            Roshan Studio is your trusted partner Let us transform your ideas
            into visually stunning realities.
          </p>
          <div className="row m-0 mt-lg-5 mt-4">
            <div className="col-lg-4 col-12 mb-lg-0 mb-5">
              <div className="card bg-transparent border-0 text-center">
                <div className="display-6 fw-bolder text-black">32</div>
                <div className="fs-4 text-main fw-bolder text-uppercase">
                  Active Clients
                </div>
                <hr className="w-50 mx-auto my-2" />
                <h6 className="opacity-75 fw-bold">
                  We have clients around the world
                </h6>
              </div>
            </div>
            <div className="col-lg-4 col-12 mb-lg-0 mb-5">
              <div className="card bg-transparent border-0 text-center">
                <div className="display-6 fw-bolder text-black">156</div>
                <div className="fs-4 text-main   fw-bolder  text-uppercase">
                  Projects Done
                </div>
                <hr className="w-50 mx-auto my-2" />
                <h6 className="opacity-75 fw-bold">
                  We have already done Countless projects.
                </h6>
              </div>
            </div>{" "}
            <div className="col-lg-4 col-12  mb-lg-0 mb-5">
              <div className="card bg-transparent border-0 text-center">
                <div className="display-6 fw-bolder text-black">2200</div>
                <div className="fs-4 text-main  fw-bolder  text-uppercase">
                  Videos Made
                </div>
                <hr className="w-50 mx-auto my-2" />
                <h6 className="opacity-75 fw-bold">
                  We have created more than 2k videos.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Truestedblock;
