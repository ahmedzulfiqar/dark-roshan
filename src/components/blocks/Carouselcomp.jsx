import React from "react";
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
function Carouselcomp() {
  return (
    <Swiper
      className="myslider"
      loop={true}
      modules={[Navigation, Autoplay]}
      effect="fade"
      navigation={true}
      autoplay={{
        delay: 5000,
      }}
      speed={1100}
    >
      <SwiperSlide>
        <Slide
          data={{
            heading: "Where Ideas Meets Creativity",
            img: "https://images.unsplash.com/photo-1605826832916-d0ea9d6fe71e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "Event Videos",
            img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "Youtube Videos",
            img: "https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "promotional videos",
            img: "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "Explainer Videos",
            img: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carouselcomp;
