import React from "react";

function Servicecards({ data }) {
  return (
    <div className="col-4 mt-5 mb-2 px-2">
      <div className="card bg-transparent  p-0">
        <img src={data.img} className="img-fluid iconimg mx-auto" />
        <div className="card-body">
          <div className="fs-3 text-light fw-bolder mb-2">{data.heading}</div>
          <p className="text-light opacity-75 text-start">{data.para}</p>
        </div>
      </div>
    </div>
  );
}

export default Servicecards;
