import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper";

import promo1 from "shared/images/promo/promo1.png";
import promo2 from "shared/images/promo/promo2.png";
import promo3 from "shared/images/promo/promo3.png";

export const Promo = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className="container-promo">
        <div className="titles">
          <h1>Акции</h1>
        </div>
        <Swiper
          className="promo-swiper"
          slidesPerView={3}
          speed={1500}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide className="container-images">
            <img className="images" src={promo3} />
          </SwiperSlide>
          <SwiperSlide className="container-images">
            <img className="images" src={promo2} />
          </SwiperSlide>
          <SwiperSlide className="container-images">
            <img className="images" src={promo1} />
          </SwiperSlide>
          <SwiperSlide className="container-images">
            <img className="images" src={promo3} />
          </SwiperSlide>
          <SwiperSlide className="container-images">
            <img className="images" src={promo2} />
          </SwiperSlide>
          <div className="slider-controler">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};
