import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import Teamcard from "../atoms/Teamcard";
function Teamblock() {
  return (
    <div
      className="col-12 p-0 mt-lg-3 mt-0  shadow-sm"
    >
      <div className="row m-0 m-0 bg-primarys  py-md-5 py-3 justify-content-center px-2">
        <div className="col-lg-8 col-12 py-2 text-lg-center text-start">
          <div className="fs-1 text-uppercase d-lg-block d-none text-dark fw-bolder">
            OUR TEAM
          </div>
          <div className="fs-3 text-uppercase d-lg-none d-block text-dark fw-bolder">
            OUR TEAM
          </div>
          <hr
            className="bg-main opacity-100 border-0  mx-lg-auto w-25"
            style={{ height: ".1px" }}
          />
          <p className="text-dark mt-md-4 mt-3 d-lg-block d-none opacity-75">
            Roshan studio is a mix of experts and professionals working
            collaboratively to provide you best quality.
          </p>
          <p className="text-dark mt-md-4 mt-0 d-lg-none d-block small opacity-75">
            Roshan studio is a mix of experts and professionals working
            collaboratively to provide you best quality.
          </p>
          <div className=" mt-lg-5 mt-4 mx-0">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 240,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              loop={true}
              className="mySwiper"
            >
              <SwiperSlide>
                <Teamcard />
              </SwiperSlide>
              <SwiperSlide>
                <Teamcard />
              </SwiperSlide>
              <SwiperSlide>
                <Teamcard />
              </SwiperSlide>
              <SwiperSlide>
                <Teamcard />
              </SwiperSlide>
              <SwiperSlide>
                <Teamcard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teamblock;
