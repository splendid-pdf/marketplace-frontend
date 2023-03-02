import classes from "./HomePage.module.scss";
import { Slider } from "features/Slider";
import { Carousel } from "features/Carousel";

const HomePage = () => {
  return (
    <div className={`${classes.HomePage} main `}>
      <Slider />
      <div className={classes.titles}>
        <h1>Новинки</h1>
        <a className={classes.watchAll} href="">
          Cмотреть все
        </a>
      </div>
      <Carousel />
    </div>
  );
};

export default HomePage;
