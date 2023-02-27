import { BASE_URL } from "shared/constants/base_url";
import { DropdownMenu } from "shared/ui/DropdownMenu/DropdownMenu";
import classes from "./NavBarSeller.module.scss";

export type TItems = {
  name: string;
  url: string;
  listMenu?: Array<{ name: string; url?: string }>;
};

const items: TItems[] = [
  {
    name: "Главная",
    url: `${BASE_URL}/home-seller`,
    listMenu: [],
  },
  {
    name: "Товары",
    url: `${BASE_URL}/home-seller/product`,
    listMenu: [
      {
        name: "Список товаров",
        url: "",
      },
      {
        name: "Архив",
        url: "",
      },
      {
        name: "Отзывы",
        url: "",
      },
      {
        name: "Вопросы",
        url: "",
      },
      {
        name: "Рукомендации",
        url: "",
      },
    ],
  },
  {
    name: "Заказы",
    url: `${BASE_URL}/home-seller/orders`,
    listMenu: [
      {
        name: "Все",
        url: "",
      },
      {
        name: "Активные",
        url: "",
      },
      {
        name: "Завешенные",
        url: "",
      },
    ],
  },
];

export const NavBarSeller = () => {
  return (
    <>
      <div className={classes.wrapperNavBarSeller}>
        {items.map((item, index) => {
          return <DropdownMenu key={index} item={item} />;
        })}
      </div>
    </>
  );
};
