import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Card } from "shared/ui/ProductCard/Card";

import card1 from "../../../shared/images/products/card1.png";
import card2 from "../../../shared/images/products/card2.png";
import card3 from "../../../shared/images/products/card3.png";
import card4 from "../../../shared/images/products/card4.png";
import card5 from "../../../shared/images/products/card5.png";
import card6 from "../../../shared/images/products/card6.png";
import card7 from "../../../shared/images/products/card7.png";
import card8 from "../../../shared/images/products/card8.png";
import card9 from "../../../shared/images/products/card9.png";
import card10 from "../../../shared/images/products/card10.png";
import card11 from "../../../shared/images/products/card11.png";
import card12 from "../../../shared/images/products/card12.png";

import "../../../shared/fonts/Manrope/static/Manrope-Bold.ttf";

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
    image: card5,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: card6,
    price: "1",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: card7,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: card8,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

const test3 = [
  {
    image: card9,
    price: "17260",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    image: card10,
    price: "98500",
    title: "Ecco Moco / Прямой диван Грин",
  },
  {
    image: card11,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: card12,
    price: "20130",
    title:
      "ЭкоСтайлИт / Стул из натурального светлого дерева с мягким сидением",
  },
];

export const Carousel = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className="container-carousel">
        <div className="titles">
          <h1>Новинки</h1>
          <a className="watch-all" href="#">
            Смотреть всё
          </a>
        </div>
        <Swiper
          effect={"fade"}
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
