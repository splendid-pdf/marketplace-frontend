import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import classes from "./Slider.module.scss";

import slider01 from "shared/images/slider/slider01.png";
import slider02 from "shared/images/slider/slider02.png";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper";

export const Slider = () => {
  return (
    <div className={"content" + " " + "container"}>
      <Swiper
        className={classes.slider}
        slidesPerView={1}
        speed={700}
        autoplay={{
          delay: 7000,
          disableOnInteraction: true,
        }}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
      >
        <SwiperSlide>
          <img src={slider01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider01} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider02} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider01} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
