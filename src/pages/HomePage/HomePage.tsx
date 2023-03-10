import classes from "./HomePage.module.scss";
import { Slider } from "widgets/Slider";
import { Carousel } from "widgets/Carousel";
import { Promo } from "widgets/Promo";

const HomePage = () => {
  return (
    <div className={`${classes.HomePage} main`}>
      <Slider />
      <Carousel />
      <Promo />
    </div>
  );
};

export default HomePage;
