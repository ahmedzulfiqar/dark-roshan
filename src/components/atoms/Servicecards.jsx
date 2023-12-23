import React from "react";

function Servicecards({ data }) {
  return (
    <div className="col-lg-4 col-12 mt-lg-5 mt-0 mb-lg-2 mb-0 px-lg-2 px-0">
      <div className="card bg-transparent  p-0">
        <img src={data.img} className="img-fluid iconimg mx-lg-auto d-lg-block d-none" />
        <div className="card-body px-lg-3 px-0">
          <div className="fs-3 text-light fw-bolder mb-2">{data.heading}</div>
          <p className="text-light opacity-75 text-start">{data.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Servicecards;
