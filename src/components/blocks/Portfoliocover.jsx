import React, { useEffect, useState } from "react";
import VideoCard from "../atoms/VideoCard";
import Barshop from "../atoms/Barshop";
import portfoliodata from "../data/portfoliodata";
import { motion } from "framer-motion";
function Portfoliocover({ data }) {
  return (
    <div
      className="col-12 p-0 mt-lg-5 mt-4  bg- "
      style={{
        backgroundImage:
          "url(https://marksoln.in/assets/img/images/h3_project_shape.png)",
        backgroundSize: "cover",
      }}
    >
      <img
        src="https://marksoln.in/assets/img/images/h2_about_shape03.png"
        alt=""
        class="moving-image"
      />{" "}
      <img
        src="https://marksoln.in/assets/img/images/agency_shape02.png"
        alt=""
        class="moving-image2"
      />
            <img
        src="https://marksoln.in/assets/img/images/h2_about_shape03.png"
        alt=""
        class="moving-image3"
      />{" "}
      <img
        src="https://marksoln.in/assets/img/images/agency_shape02.png"
        alt=""
        class="moving-image4"
      />
      <div className="row m-0 justify-content-center">
        <div className="col-lg-8 col-12 px-0  text-center">
          <motion.div
            className="p-0"
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
            <div className="fs-3 mt-lg-5 text- d-lg-block d-none text-lessmain fw-bolder te">
              Portfolio :
            </div>
            <div className="fs-3 mt-4 text-uppercase d-lg-none d-block text-lessmain fw-bolder">
              Portfolio
            </div>
            <div className="display-5 mt-lg-2 text-uppercase d-lg-block d-none  text-main fw-bolder te">
              Seeing is Believing{" "}
              <div className="text-dark"> Dive into Our Editing Portfolio</div>
            </div>{" "}
            <div className="fs-3 mt-2 text-uppercase d-lg-none d-block  text-main  fw-bolder">
              Seeing is Believing{" "}
              <div className="text-dark"> Dive into Our Editing Portfolio</div>
            </div>
          </motion.div>
          <Barshop />
          <motion.div
            className="row mt-lg-3 mt-2 justify-content-start m-0"
            viewport={{ once: false }}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: {
                opacity: 0,
                x: -20,
              },
            }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {data.videos.map((i, index) => {
              return <VideoCard data={i} parentdata={data} index={index} />;
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocover;
