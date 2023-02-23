import { Card } from "shared/ui/ProductCard/Card";
import classes from "./HomePage.module.scss";
import sofa from "shared/images/Farico12-322.jpg";

const test = [
  {
    image: "https://a.pinskdrev.by/web/files/divany/new_interior/Mishel_3ML8MR%20(2).jpg",
    price: "1000",
    fullPrice: "2000",
  },
  {
    image: sofa,
    price: "1000",
    fullPrice: "2000",
  },
  {
    image: "https://a.pinskdrev.by/web/files/divany/new_interior/Mishel_3ML8MR%20(2).jpg",
    price: "1000",
    fullPrice: "2000",
  },
];

const HomePage = () => {
  return (
    <div className={`${classes.HomePage} main `}>
      <h1>Добро пожаловать в Мир мебели!</h1>
      <div className={classes.wrapperTest}>
        {test.map((item, index) => (
          <Card obj={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
