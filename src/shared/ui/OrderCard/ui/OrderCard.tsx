import React from "react";
import { Button } from "@mui/material";
import classes from "./OrderCard.module.scss";
import { Card } from "shared/ui/ProductCard/Card";
import card1 from "shared/images/products/card1.png";
import card2 from "shared/images/products/card2.png";
import card3 from "shared/images/products/card3.png";
import card4 from "shared/images/products/card4.png";

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
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
  {
    image: card4,
    price: "59990",
    title: "Ecco Moco / Модульный диван Элемент",
  },
];

export const OrderCard: React.FC = () => {
  return (
    <div className={classes.OrderCard}>
      <div className={classes.OrderCard__header}>
        <div className={classes.OrderCard__header__orderInfo}>
          <p>Заказ №3214</p>
          <p>2 товара</p>
        </div>
        <p className={classes.OrderCard__header__orderStatus}>Статус заказа: Собирается</p>
      </div>

      <div className={classes.OrderCard__content}>
        {test.map((item, index) => (
          <Card obj={item} key={index} hideCartButton />
        ))}
      </div>
      <div className={classes.OrderCard__footer}>
        <Button type="button" size="large" variant="contained" className={classes.buttonSubmit}>
          Подтвердить получение заказа
        </Button>
        <Button type="button" size="large" variant="outlined" className={classes.buttonSubmit}>
          Отменнить заказ
        </Button>
      </div>
    </div>
  );
};
