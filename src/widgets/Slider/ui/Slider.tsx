import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./Slider.module.scss";

import slider01 from "shared/images/slider01.png";
import slider02 from "shared/images/slider02.png";

import { Pagination, Navigation, Autoplay } from "swiper";

export const Slider = () => {
  return (
    <div className={"content" + " " + "container"}>
      <Swiper
        className={classes.slider}
        slidesPerView={1}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
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
