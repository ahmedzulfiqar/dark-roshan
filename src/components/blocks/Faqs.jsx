import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
function Faqs() {
  return (
    <div className="col-12 p-0">
      <div className="row m-0 py-md-5 py-4 justify-content-center px-2">
        <div className="col-lg-8 col-12 py-2 text-lg-center text-start">
          <div className="fs-1 text-uppercase d-lg-block d-none text-dark fw-bolder">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <div className="fs-3 text-uppercase d-lg-none d-block text-dark fw-bolder">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <hr
            className="bg-main opacity-100 border-0  mx-lg-auto w-25 mb-lg-5"
            style={{ height: ".1px" }}
          />{" "}
          <div className="row m-0 justify-content-center">
            <div className="col-lg-10 col-12 p-0">
              <Accordion className="py-1 my-3 shadow-none border-lessmain">
                <AccordionSummary
                  expandIcon={
                    <i
                      class="fa fa-arrow-down text-main d-lg-block d-none"
                      aria-hidden="true"
                    ></i>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="text-uppercase fs-6 small">
                    What services does your video editors agency provide?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className=" text-start">
                    We offer a range of video editing services, including but
                    not limited to, cutting, trimming, adding effects, color
                    correction, audio enhancement, and more.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="py-1 my-3 shadow-none border-lessmain">
                <AccordionSummary
                  expandIcon={
                    <i
                      class="fa fa-arrow-down text-main d-lg-block d-none"
                      aria-hidden="true"
                    ></i>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="text-uppercase">
                    What is the typical turnaround time for video editing
                    projects?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className=" text-start">
                    Turnaround times vary based on the complexity and length of
                    the project. However, we strive to deliver the first draft
                    within 5 days and provide revisions promptly.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="py-1 my-3 shadow-none border-lessmain">
                <AccordionSummary
                  expandIcon={
                    <i
                      class="fa fa-arrow-down text-main d-lg-block d-none"
                      aria-hidden="true"
                    ></i>
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className="text-uppercase">
                    What software do your video editors use?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className=" text-start">
                    Our experienced editors are proficient in industry-standard
                    software such as Adobe Premiere Pro, Final Cut Pro, and
                    other specialized tools for video enhancement.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
