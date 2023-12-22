import React from "react";
import Carouselcomp from "../blocks/Carouselcomp";
import Textblock1 from "../blocks/Textblock1";
import Videoshowblock from "../blocks/Videoshowblock";
function Main() {
  return (
    <div className="col-12 p-0">
      <div className="row m-0">
        <div className="container">
          <Carouselcomp />
          <Textblock1 />
          <Videoshowblock />
        </div>
      </div>
    </div>
  );
}

export default Main;
