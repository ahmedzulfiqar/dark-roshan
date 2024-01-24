import React from "react";
import Carouselcomp from "../blocks/Carouselcomp";
import Textblock1 from "../blocks/Textblock1";
import Videoshowblock from "../blocks/Videoshowblock";
import Portfolioblock from "../blocks/Portfolioblock";
import Backgroundimage from "../blocks/Backgroundimage";
import Contactblock from "../blocks/Contactblock";
import Footer from "../blocks/Footer";
function Main() {
  return (
    <div className="col-12 p-0">
      <div className="row m-0 justify-content-center">
          <Carouselcomp />
          <Textblock1 />
          <Videoshowblock />
          <Portfolioblock />
          <Backgroundimage />
          <Contactblock />
          <Footer />
        </div>
      </div>
  );
}

export default Main;
