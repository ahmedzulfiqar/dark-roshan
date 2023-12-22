import React from "react";

function Listitem({ data }) {
  return (
    <div className="text-light fw-bold fs-6 cta listitem ms-auto text-uppercase px-0 align-self-center ">
      <span className="hover-underline-animation"> {data}</span>
    </div>
  );
}

export default Listitem;
