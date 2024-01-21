import React, { useState } from "react";
import Listitem from "./Listitem";
import Toggleswitch from "./Toggleswitch";
import Mobilelist from "./Mobilelist";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import portfoliodata from "../data/portfoliodata";

function List({ open, setopen }) {
  const [drop, setdrop] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 150 },
  };
  return (
    <>
      <div className="col-xl-5 ps-1  ps-5 col-7 d-xl-flex d-none  px-0 align-self-center ">
        <Listitem data={"Home"} />
        <Listitem data={"About"} />
        <Listitem data={"Portfolio"} />
        <Listitem data={"Services"} />
        <Listitem data={"Contact"} />
      </div>
      <div className="col text-end d-xl-none d-block  align-self-center">
        <Toggleswitch open={open} setopen={setopen} />
      </div>
    </>
  );
}

export default List;
