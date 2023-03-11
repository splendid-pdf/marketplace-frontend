import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import banner from "shared/images/banner/banner.png";
import { ButtonMarketPlace } from "shared/ui/Button/ButtonMarketPlace";

export const Banner = () => {
  return (
    <div className={"content" + " " + "container"}>
      <div className="banner-container">
        <img className="banner-img" src={banner} alt="" />
        <ButtonMarketPlace text="Перейти в каталог" className="btnHeader" />
        <div className="text">
          <p>Успей приобрести популярные товары по выгодным ценам</p>
        </div>
      </div>
    </div>
  );
};
