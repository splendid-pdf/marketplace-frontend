import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import classes from "./Slider.module.scss";

import banner01 from "shared/images/slider01.png";
import banner02 from "shared/images/slider02.png";

import { Pagination, Navigation, Autoplay} from "swiper";

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
        enabled: true
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className={classes.swiper}
    >
      <SwiperSlide>
        <img className={classes.images} src={banner01} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.images} src={banner02} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.images} src={banner01} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.images} src={banner02} />
      </SwiperSlide>
      <SwiperSlide>
        <img className={classes.images} src={banner01} />
      </SwiperSlide>
    </Swiper>
  );
};
