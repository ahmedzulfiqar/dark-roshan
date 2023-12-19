import React, { useEffect } from "react";
import Mobilelistitem from "./Mobilelistitem";
import { animate, motion, stagger } from "framer-motion";

function Mobilelist({ open, setopen }) {
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
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
        className="col-12  d-xl-none d-block bg-primarys px-1 p-0  border-black"
        animate={open ? "open" : "closed"}
        initial={{ opacity: 0}}
        variants={variants}
        transition={{ duration: 0.4, delay: 0 }}
      >
        <div className="row m-0 py-1">
          <Mobilelistitem data={"Home"} />
          <Mobilelistitem data={"Portfolio"} />
          <Mobilelistitem data={"Services"} />
          <Mobilelistitem data={"About"} />
          <Mobilelistitem data={"Contact"} />
        </div>
      </motion.div>
    </>
  );
}

export default Mobilelist;
