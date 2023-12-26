import React from "react";
import VideoCard from "../atoms/VideoCard";
function Portfoliocover({ data }) {
  return (
    <div className="col-12 p-0 mt-4  bg-primarys">
      <div className="row m-0 justify-content-center">
        <div className="col-lg-8 col-12 px-0 py-3 text-center">
          <div className="fs-1 text-uppercase d-lg-block d-none text-dark fw-bolder">
            Our <span className="text-main">{data.name}</span> Projects
          </div>
          <div className="fs-6 text-uppercase d-lg-none d-block text-dark fw-bolder">
            Our <span className="text-main">{data.name}</span> Projects
          </div>
          <hr
            className="bg-main opacity-100 border-0  mx-auto w-25"
            style={{ height: ".1px" }}
          />
          <p className="text-dark mt-md-3 mt-3 d-lg-block d-none opacity-75">
            At Roshan Studio, we take pride in transforming ideas into
            captivating visual stories. With a passion for storytelling and an
            unwavering commitment to excellence, our team of skilled
            professionals has brought countless visions to life.
          </p>
          <p className="text-dark mt-md-3 mt-0 px-3 d-lg-none d-block small opacity-75">
            At Roshan Studio, we take pride in transforming ideas into
            captivating visual stories. With a passion for storytelling and an
            unwavering commitment to excellence, our team of skilled
            professionals has brought countless visions to life.
          </p>
          <div className="row mt-lg-5 mt-2 justify-content-center">
            {data.videos.map((i) => {
              return <VideoCard data={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocover;
