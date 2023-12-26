import React from "react";
import Topblock from "../atoms/Topblock";
import Portfolioblock from "../blocks/Portfolioblock";
import Footer from "../blocks/Footer";
import Faqs from "../blocks/Faqs";

function Services() {
  return (
    <div className="row m-0">
      <Topblock data={{ name: "Services" }} />
      <Portfolioblock />
      <Faqs />
      <Footer />
    </div>
  );
}

export default Services;
