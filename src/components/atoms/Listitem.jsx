import React from "react";
import { Link } from "react-router-dom";

function Listitem({ data }) {
  return (
    <div className="text-light fw-bold fs-6 cta listitem ms-auto text-uppercase px-0 align-self-center ">
      <Link className="hover-underline-animation text-light" to={data}>
        {data}
      </Link>
    </div>
  );
}

export default Listitem;
