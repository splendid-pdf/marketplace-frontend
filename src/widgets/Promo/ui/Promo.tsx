import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export const Promo = () => {
  return (
    <div className={"content" + " " + "container"}>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiperq"
        >
          <SwiperSlide>
            <div className="q"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="q"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="q"></div>
          </SwiperSlide>{" "}
          <SwiperSlide>
            <div className="q"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="q"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="q"></div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};
