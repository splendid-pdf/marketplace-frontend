import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import slider01 from "shared/images/slider01.png";
import slider02 from "shared/images/slider02.png";

import { Pagination, Navigation, Autoplay } from "swiper";

export const Slider = () => {
  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{ delay: 8000, disableOnInteraction: true }}
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
  );
};
