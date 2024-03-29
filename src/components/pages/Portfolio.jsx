import React from "react";
import Topblock from "../atoms/Topblock";
import Portfoliocover from "../blocks/Portfoliocover";
import Footer from "../blocks/Footer";

function Portfolio({ data }) {
  return (
    <div className="row m-0">
      <Portfoliocover data={data} />
    </div>
  );
}

export default Portfolio;
