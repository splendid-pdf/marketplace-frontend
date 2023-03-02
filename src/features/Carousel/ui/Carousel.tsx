import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Card } from "shared/ui/ProductCard/Card";
import card1 from "../../../shared/images/card1.png";
import card2 from "../../../shared/images/card2.png";
import card3 from "../../../shared/images/card3.png";
import card4 from "../../../shared/images/card4.png";

import { Pagination, Navigation } from "swiper";

const test = [
  {
    image: card1,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: card2,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: card3,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: card4,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

const test2 = [
  {
    image: card1,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: card2,
    price: "1",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: card3,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: card4,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

const test3 = [
  {
    image: card1,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: card2,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: card3,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: card4,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

export const Carousel = () => {
  return (
    <div className="container-main">
      <div className="titles">
        <h1>Новинки</h1>
        <a className="watch-all" href="#">Смотреть всё</a>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
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
        <SwiperSlide>
          <div className="wrapper">
            {test.map((item, index) => (
              <Card obj={item} key={index} />
            ))}
          </div>
          <div className="magic"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            {test2.map((item, index) => (
              <Card obj={item} key={index} />
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            {test3.map((item, index) => (
              <Card obj={item} key={index} />
            ))}
          </div>
        </SwiperSlide>
        <div className="slider-controler">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};
