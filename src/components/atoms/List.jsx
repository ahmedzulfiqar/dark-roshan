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
        <div className="text-dark fw-bold fs-6 cta listitem ms-auto text-uppercase px-0 align-self-center ">
          <a
            className="hover-underline-animation text-dark"
            onClick={() => setdrop(!drop)}
          >
            portfolio{" "}
            <i
              class="fa fa-chevron-down text-main small"
              aria-hidden="true"
            ></i>
            <motion.div
              className="bg-primarys sew shadow-sm py-3 px-3 border mt-4"
              animate={drop ? "open" : "closed"}
              initial={{ opacity: 0 }}
              variants={variants}
              transition={{ duration: 0.2, delay: 0 }}
            >
              <div className="row m-0">
                {portfoliodata.map((i, index) => {
                  return (
                    <>
                      <Link className="col-6 p-2 text-dark" to={i.path}>
                        {i.name}
                      </Link>
                      {index % 2 === 1 &&
                        index !== portfoliodata.length - 1 && (
                          <hr className="my-2" />
                        )}
                    </>
                  );
                })}
              </div>
            </motion.div>
          </a>
        </div>
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
