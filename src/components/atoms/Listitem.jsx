import React from "react";
import { Link } from "react-router-dom";

function Listitem({ data }) {
  return (
    <div className="text-dark fw-bold fs-6 cta listitem ms-auto text-uppercase px-0 align-self-center ">
      <Link className="hover-underline-animation text-dark" to={data}>
        {data}
      </Link>
    </div>
  );
}

export default Listitem;
