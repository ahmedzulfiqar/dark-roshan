import React from "react";
import VideoCard from "../atoms/VideoCard";
import Barshop from "../atoms/Barshop";
function Portfoliocover({ data }) {
  return (
    <div className="col-12 p-0 mt-lg-5 mt-4  bg-">
      <div className="row m-0 justify-content-center">
        <div className="col-lg-8 col-12 px-0  text-center">
          <div className="display-4 mb-4 text-uppercase d-lg-block d-none text-main fw-bolder">
            Cetagories
          </div>
          <div className="fs-3 text-uppercase d-lg-none d-block text-main fw-bolder">
            Cetagories
          </div>{" "}
          <Barshop />
          <div className="display-4 mt-lg-5 text-uppercase d-lg-block d-none text-dark fw-bolder">
             {data.name.split(" ")[0]}
            <span className="text-main"> {data.name.split(" ")[1]}</span>
          </div>
          <div className="fs-3 mt-4 text-uppercase d-lg-none d-block text-dark fw-bolder">
             <span className="text-main">{data.name}</span>
          </div>
          <div className="row mt-lg-5 mt-2 justify-content-start m-0">
            {data.videos.map((i, index) => {
              return <VideoCard data={i} parentdata={data} index={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfoliocover;
