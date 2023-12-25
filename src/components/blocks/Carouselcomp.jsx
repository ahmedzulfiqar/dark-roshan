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
            img: "https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "Event Videos",
            img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "Youtube Videos",
            img: "https://images.unsplash.com/photo-1618381801643-3d253a63a386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "promotional videos",
            img: "https://images.unsplash.com/photo-1603673319826-2f109cbf42aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Slide
          data={{
            heading: "Explainer Videos",
            img: "https://images.unsplash.com/photo-1507919909716-c8262e491cde?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carouselcomp;
