import React from "react";
import { Link } from "react-router-dom";
function Mobilelistitem({ data, open, setopen }) {
  return (
    <Link
      className="fs-6 py-3 border-bottom border-dark text-uppercase fw-normal Mobilelistitem border-opacity-25 fw-  ps-3 text-dark"
      to={data}
      onClick={() => setopen(!open)}
    >
      {data}
    </Link>
  );
}

export default Mobilelistitem;
