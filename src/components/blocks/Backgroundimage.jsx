import React from "react";
import Reviewcard from "../atoms/Reviewcard";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
function Backgroundimage() {
  return (
    <div className="row m-0  py-md-5 py-4 justify-content-center px-2" >
      <div className="col-lg-8 col-12 py-3 text-md-center text-uppercase text-center">
        <div className="fs-1 text-uppercase d-lg-block d-none text-light fw-bolder">
          testemonials
        </div>
        <div className="fs-3 text-uppercase d-lg-none d-block text-light fw-bolder">
          testemonials
        </div>
        <hr
          className="bg-main opacity-100 border-0  mx-auto w-25"
          style={{ height: ".1px" }}
        />
        <div className="row m-0">
          <div className="col-12 p-0 mt-lg-0 mt-2 mb-3">
            <Swiper
              className=""
              loop={true}
              modules={[Autoplay, Pagination]}
              effect="fade"
              spaceBetween={150}
              autoplay={{
                delay: 4000,
              }}
              speed={500}
            >
              <SwiperSlide>
                <Reviewcard
                  data={{
                    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
                    name: "Maria Smantha",
                    profession: "Graphic Desginer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sedharum odio necessitatibus ipsam repellendus eos perspiciatissapiente minus. Ut deleniti architecto quisquam. Voluptatum, nonincidunt atque consequuntur illo ea?",
                  }}
                />
              </SwiperSlide>
              <SwiperSlide>
                <Reviewcard
                  data={{
                    img: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp",
                    name: "Maggie McLoan",
                    profession: "Photographer",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi sedharum odio necessitatibus ipsam repellendus eos perspiciatissapiente minus. Ut deleniti architecto quisquam. Voluptatum, nonincidunt atque consequuntur illo ea?",
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backgroundimage;
