import React from "react";
import Topblock from "../atoms/Topblock";
import Aboutblock from "../blocks/Aboutblock";
import Teamblock from "../blocks/Teamblock";

function About() {
  return (
    <div className="row m-0">
      <Topblock data={{ name: "About Us" }} />
      <Aboutblock />
      <Teamblock />
    </div>
  );
}

export default About;
