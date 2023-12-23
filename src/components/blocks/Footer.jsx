import React from "react";

function Footer() {
  return (
    <>
      <footer className=" border border-dark border-opacity-10 text-start bg-primarys  text-muted">
        <div className="container  text-start ">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4  ps-md-2 ps-4">
              <h6 className="text-uppercase text-light fw-bold mb-4">
                <i className="fas fa-gem me-3 text-main"></i>Roshan Studio
              </h6>
              <p>
                Roshan studio is a digital marketing agency based in Islamabad.
                Our vision is to provide our clients with the best solutions
                within the services we provide and a huge impact on the sales of
                their products and services.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-md-block d-none">
              <h6 className="text-uppercase fw-bold mb-4 text-main">
                Services
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Video Editing
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Content Creation
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Motion Graphics
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Youtube Videos
                </a>
              </p>
            </div>
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4  d-md-block d-none">
              <h6 className="text-uppercase fw-bold mb-4 text-main">
                Useful links
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  About Us
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Portfolio
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Contact Us
                </a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4  ps-md-0 ps-4">
              <h6 className="text-uppercase fw-bold mb-4 text-main">Contact</h6>
              <p>
                <i className="fas fa-home me-3 text-main"></i> New York, NY
                10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3 text-main"></i>
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3 text-main"></i> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3 text-main"></i> + 01 234 567 89
              </p>
            </div>
          </div>
        </div>
      </footer>
      <footer class="bg-body-tertiary  text-light text-center text-lg-start">
        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-light" href="">
            &nbsp; RoshanStudio.com
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
