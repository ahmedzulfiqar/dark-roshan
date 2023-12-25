import React, { useEffect, useState } from "react";
import image1 from "../media/photo-1419242902214-272b3f66ee7a.webp";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import Slide from "../atoms/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
function Topblock({ data }) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const slowSpeed = offsetY / 3;
  return (
    <div className="col-12 p-0">
      <Swiper
        className=""
        loop={true}
        modules={[Navigation, Autoplay]}
        effect="fade"
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
        speed={1100}
        style={{ height: "40vh" }}
      >
        <SwiperSlide>
          <div>
            <img
              src={image1}
              className="w-100 "
              style={{
                position: "fixed",
                top: slowSpeed,
                height: "40vh",
              }}
            />
            <div className="overlay"></div>
            <div className="newtext  w-100">
              <div className="display-1 fw-bolder mb-md-2 mb-2 text-uppercase text-center text-dark">
                <span className="text-lessmain">
                  {" "}
                  {data.name.split(" ")[0]}
                </span>{" "}
                {data.name.split(" ")[1]}
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Topblock;
