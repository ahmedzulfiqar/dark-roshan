import React from "react";
import Topblock from "../atoms/Topblock";
import Contactblock from "../blocks/Contactblock";
import Footer from "../blocks/Footer";

function Contact() {
  return (
    <div className="row m-0">
      <Topblock data={{ name: "Contact Us" }} />
      <Contactblock />
      <Footer />
    </div>
  );
}

export default Contact;
