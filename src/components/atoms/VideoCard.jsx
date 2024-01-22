import React, { useState } from "react";
import { motion } from "framer-motion";

function VideoCard({ data, parentdata, index }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const animationVariants = index % 2 === 0
    ? {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -60 },
      }
    : {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 60 },
      };

  return (
    <motion.div
    className="col-lg-6 col-md-6 col-6 my-lg-3 my-2 px-1 overflow-hidden rounded-2"
    key={parentdata.name}
    style={{ position: "relative" }}
    onHoverStart={handleHover}
    onHoverEnd={handleMouseLeave}
    viewport={{ once: false }}
    initial="hidden"
    whileInView="visible"
    variants={animationVariants}
    transition={{ duration: 1, delay: 0.3 }}
    >
      <div className="overflow-hidden rounded-2 ">
        <motion.img
          src={data.thumbnail}
          alt=""
          className="img-fluid w-100 shadow rounded-2 mx-lg-2"
          animate={{
            transform: isHovered ? "scale(1.1) " : "scale(1)",
          }}
        />
      </div>
      <motion.div
        className="transformer btn bg-dark text-start px-3 py-2 mb-2 rounded-2 d-md-block d-none "
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: "95%",
        }}
        animate={{
          transform: isHovered
            ? "translateX(-50%) translateY(-0%) "
            : "translateX(-50%) translateY(110%)",
        }}
      >
        <div className="fs-3  text-light fw-bolder">View Project {">"}</div>
        <div className="fs-6 small text-lowercase text-light opacity-75 ">
          {parentdata.name}
        </div>
      </motion.div>{" "}
    </motion.div>
  );
}

export default VideoCard;
