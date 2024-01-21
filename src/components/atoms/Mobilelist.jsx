import React, { useEffect, useState } from "react";
import Mobilelistitem from "./Mobilelistitem";
import { animate, motion, stagger } from "framer-motion";
import portfoliodata from "../data/portfoliodata";
import { Link } from "react-router-dom";

function Mobilelist({ open, setopen }) {
  const [drop, setdrop] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: 300 },
  };
  const variants2 = {
    open: { opacity: 1, display: "block" },
    closed: { opacity: 0, display: "none" },
  };
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
  useEffect(() => {
    animate(
      ".Mobilelistitem",
      open ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 },
      {
        duration: 0.2,
        delay: open ? staggerMenuItems : 0,
      }
    );
  }, [open]);

  return (
    <>
      <motion.div
        className="col-12 absoluter d-xl-none shadow d-block  bg-primarys px-1 p-0  border-0 position-fixed"
        animate={open ? "open" : "closed"}
        initial={{ opacity: 0 }}
        variants={variants}
        transition={{ duration: 0.2, delay: 0 }}
      >
        <div className="row m-0 py-1">
          <Mobilelistitem data={"Home"} open={open} setopen={setopen} />
          <Mobilelistitem data={"About"} open={open} setopen={setopen} />
          <Mobilelistitem data={"Portfolio"} open={open} setopen={setopen} />
          <Mobilelistitem data={"Services"} open={open} setopen={setopen} />
          <Mobilelistitem data={"Contact"} open={open} setopen={setopen} />
        </div>
      </motion.div>
    </>
  );
}

export default Mobilelist;
