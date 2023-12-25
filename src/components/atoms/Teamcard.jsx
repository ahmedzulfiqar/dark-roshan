import React from "react";

function Teamcard() {
  return (
    <div className="card border-0 rounded-2  m-0 p-0 overflow-hidden">
      <div className="p-0 m-0 overflow-hidden">
        <img
          src="https://2.bp.blogspot.com/-aajuO5QuxOE/UMLhwWZDToI/AAAAAAAAAHI/c9RVf_DXcM8/s320/83099042.jpg"
          alt=""
          className="img-fluid filterr m-0 p-0 w-100 rounded-2"
          style={{ height: "25vh" }}
        />
      </div>
      <div className="card-body">
        <div className="fs-2 fw-bolder text-uppercase">Jhon Dueplx</div>
        <p className="fs-5 mt-1 text-main">Photograpgher</p>
      </div>
    </div>
  );
}

export default Teamcard;
