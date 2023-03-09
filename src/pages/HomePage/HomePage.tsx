import classes from "./HomePage.module.scss";
import { Slider } from "widgets/Slider";
import { Carousel } from "widgets/Carousel";

const HomePage = () => {
  return (
    <div className={`${classes.HomePage} main`}>
      <Slider />
      <Carousel />
    </div>
  );
};

export default HomePage;
