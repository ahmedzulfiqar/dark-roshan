import React from "react";

function Contactblock() {
  return (
    <div className="row m-0 bg-primarys py-md-5 py-4  justify-content-center px-2">
      <div className="col-lg-8 col-12 py-2 text-lg-center text-start">
        <div className="fs-1 text-uppercase d-lg-block d-none text-light fw-bolder">
          contact us
        </div>
        <div className="fs-3 text-uppercase d-lg-none d-block text-light fw-bolder">
          contact us
        </div>
        <hr
          className="bg-main opacity-100 border-0  mx-lg-auto w-25"
          style={{ height: ".1px" }}
        />
        <p className="text-light mt-md-4 mt-3 d-lg-block d-none opacity-75">
          We welcome you to contact us for more information about any of our
          services.
        </p>
        <p className="text-light mt-md-4 mt-0 d-lg-none d-block small opacity-75">
          We welcome you to contact us for more information about any of our
          services.
        </p>{" "}
        <div
          className="block pb-4"
          style={{
            height: "40vh",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=Deep%20Studio%2C%20dubai&t=m&z=15&output=embed&iwloc=near"
            frameborder="0"
            className="w-100 h-100 mt-3"
          ></iframe>
        </div>
     
      </div>
    </div>
  );
}

export default Contactblock;
