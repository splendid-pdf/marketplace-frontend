import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Card } from "shared/ui/ProductCard/Card";

import like1 from "../../../shared/images/liked/like1.png";
import like2 from "../../../shared/images/liked/like2.png";
import like3 from "../../../shared/images/liked/like3.png";
import like4 from "../../../shared/images/liked/like4.png";
import like5 from "../../../shared/images/liked/like5.png";
import like6 from "../../../shared/images/liked/like6.png";
import like7 from "../../../shared/images/liked/like7.png";
import like8 from "../../../shared/images/liked/like8.png";
import like9 from "../../../shared/images/liked/like9.png";
import like10 from "../../../shared/images/liked/like10.png";
import like11 from "../../../shared/images/liked/like11.png";
import like12 from "../../../shared/images/liked/like12.png";

import "../../../shared/fonts/Manrope/static/Manrope-Bold.ttf";

import { Pagination, Navigation } from "swiper";

const test = [
  {
    image: like1,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: like2,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: like3,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: like4,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

const test2 = [
  {
    image: like5,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: like6,
    price: "1",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: like7,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: like8,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

const test3 = [
  {
    image: like9,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: like10,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: like11,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: like12,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

export const Liked = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className="container-carousel">
        <div className="titles">
          <h1>Популярное на основе ваших просмотров</h1>
          <a className="watch-all" href="#">
            Смотреть всё
          </a>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
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
          <SwiperSlide>
            <div className="card-wrapper">
              {test.map((item, index) => (
                <Card obj={item} key={index} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-wrapper">
              {test2.map((item, index) => (
                <Card obj={item} key={index} />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card-wrapper">
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
    </div>
  );
};
