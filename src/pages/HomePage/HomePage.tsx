import classes from "./HomePage.module.scss";
import { Slider } from "widgets/Slider";
import { Carousel } from "widgets/Carousel";
import { Promo } from "widgets/Promo";
import { Popular } from "widgets/Popular";
import { Bestsellers } from "widgets/Bestsellers";
import { Banner } from "widgets/Banner";
import { Liked } from "widgets/Liked";
import { Preferences } from "widgets/Preferenсes";

const HomePage = () => {
  return (
    <div className={`${classes.HomePage} main`}>
      <Slider />
      <Carousel />
      <Promo />
      <Popular />
      <Bestsellers />
      <Banner />
      <Liked />
      <Preferences />
    </div>
  );
};

export default HomePage;
