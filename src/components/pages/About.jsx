import React from "react";
import Topblock from "../atoms/Topblock";
import Aboutblock from "../blocks/Aboutblock";
import Teamblock from "../blocks/Teamblock";
import Truestedblock from "../blocks/Truestedblock";
import Footer from "../blocks/Footer";

function About() {
  return (
    <div className="row m-0">
      <Topblock data={{ name: "About Us" }} />
      <Aboutblock />
      <Truestedblock />
      <Footer/>
    </div>
  );
}

export default About;
