import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
function Slide({ data }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const slowSpeed = offsetY / 3;
  return (
    <motion.div
      viewport={{ once: true }}
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: { opacity: 1 },
        hidden: {
          opacity: 0,
        },
      }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <img
        src={data.img}
        className="w-100 "
        style={{
          position: "fixed",
          top: slowSpeed,
        }}
      />
      <div className="overlay"></div>
      <div className="newtext  w-100">
        <motion.div
          className="fs-5 mb-md-2 mb-2 text-uppercase text-center text-dark"
          viewport={{ once: false }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: {
              y: -10,
              opacity: 0,
            },
          }}
          transition={{ duration: 0.2, delay: 1 }}
        >
          Roshan Studio
        </motion.div>
        <motion.div
          className="display-2 fw-bold  d-md-block d-none text-dark zindex mx-auto   text-center text-uppercase"
          viewport={{ once: false }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-main"> {data.heading.split(" ")[0]}</span>{" "}
          {data.heading.split(" ")[1]} <br />
          {data.heading.split(" ")[2]} {data.heading.split(" ")[3]}
        </motion.div>
        <motion.div
          className="display-4 mb-0 fw-bold d-md-none d-block  text-center text-dark  zindex text-uppercase"
          viewport={{ once: false }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
          }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-main"> {data.heading.split(" ")[0]}</span>{" "}
          {data.heading.split(" ")[1]} {data.heading.split(" ")[3]}
        </motion.div>
        <motion.button
          className=" btn mbtn btn-lg fw-bold  rounded-1 fs-6 mt-4 px-4 py-2 mx-auto  text-uppercase d-lg-block d-none "
          viewport={{ once: false }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: {
              y: 10,
              opacity: 0,
            },
          }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          Portfolio<i class="fa-solid fa-location-arrow ps-2"></i>
        </motion.button>
        <motion.button
          className=" btn mbtn2 btn-sm  rounded-1 fw-bold small mt-3 mx-auto text-uppercase d-lg-none d-block "
          viewport={{ once: false }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { y: 0, opacity: 1 },
            hidden: {
              y: 10,
              opacity: 0,
            },
          }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          Portfolio<i class="fa-solid fa-location-arrow ps-2"></i>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default Slide;
// /https://meet.google.com/pmn-tdvw-rhn
