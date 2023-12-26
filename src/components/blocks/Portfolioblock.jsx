import React from "react";
import Servicecards from "../atoms/Servicecards";
import { Link } from "react-router-dom";

function Portfolioblock() {
  return (
    <div className="row m-0 bg-primarys py-md-5 py-4 justify-content-center px-2">
      <div className="col-lg-8 col-12 py-2 text-lg-center text-start">
        <div className="fs-1 text-uppercase d-lg-block d-none text-dark fw-bolder">
          OUR SERVICES
        </div>
        <div className="fs-3 text-uppercase d-lg-none d-block text-dark fw-bolder">
          OUR SERVICES
        </div>
        <hr
          className="bg-main opacity-100 border-0  mx-lg-auto w-25"
          style={{ height: ".1px" }}
        />
        <div className="row m-0">
          <Servicecards
            data={{
              img: "https://deepstudio.info/wp-content/uploads/2023/01/icons-02-1.svg",
              heading: "CONTENT CREATION",
              para: "At Roshan studio, we curate compelling content from diverse ideas. Whether you're a content creator or a business, our expert touch in content creation ensures your narrative stands out…",
            }}
          />
          <Servicecards
            data={{
              img: "https://deepstudio.info/wp-content/uploads/2023/01/icons-01-1.svg",
              heading: "Motion Graphics",
              para: "At Roshan studio, we sculpt captivating narratives through motion graphics. Whether you're a content creator or a business, our expertise ensures your visual story stands out with dynamic flair…",
            }}
          />
          <Servicecards
            data={{
              img: "https://deepstudio.info/wp-content/uploads/2023/01/icons-03-1.svg",
              heading: "Video Editing",
              para: "At Roshan studio, we shape compelling narratives through expert video editing. Whether you're a content creator or a business, our polished editing ensures your story stands out with seamless precision...",
            }}
          />
        </div>
        <button className=" btn mbtn btn-lg fw-bold fs-6 mt-4 px-4 py-2 mx-auto  rounded-1 text-uppercase d-lg-block d-none ">
          <Link to={"/services"}>
            Services<i class="fa-solid fa-location-arrow ps-2"></i>
          </Link>
        </button>
        <button className=" btn mbtn2 btn-sm fw-bold small mt-0 text-uppercase rounded-1 d-lg-none d-block ">
          <Link to={"/services"}>
            Services
            <i class="fa-solid fa-location-arrow ps-2 d-md-block d-none"></i>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Portfolioblock;
