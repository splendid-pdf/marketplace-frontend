import classes from "./HomePage.module.scss";
import { Slider } from "features/Slider";
import { Carousel } from "features/Carousel";

const HomePage = () => {
  return (
    <div className={`${classes.HomePage} main`}>
      <Slider />
      <Carousel />
    </div>
  );
};

export default HomePage;
