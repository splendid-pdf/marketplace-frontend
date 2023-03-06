import { BASE_URL } from "shared/constants/base_url";

export type TItems = {
  name: string;
  url: string;
  links?: string[];
  listMenu?: Array<{ name: string; url?: string }>;
};

const ProductsLinks = [
  `${BASE_URL}/home-seller/product`,
  `${BASE_URL}/home-seller/product/archive`,
  `${BASE_URL}/home-seller/product/reviews`,
  `${BASE_URL}/home-seller/product/questions`,
  `${BASE_URL}/home-seller/product/recommendations`,
];

const OrdersLinks = [
  `${BASE_URL}/home-seller/orders`,
  `${BASE_URL}/home-seller/orders/activeorders`,
  `${BASE_URL}/home-seller/orders/completedorders`,
];

export const menuItemsSeller: TItems[] = [
  {
    name: "Главная",
    url: `${BASE_URL}/home-seller`,
    listMenu: [],
  },
  {
    name: "Товары",
    url: `${BASE_URL}/home-seller/product`,
    links: ProductsLinks,
    listMenu: [
      {
        name: "Список товаров",
        url: `${BASE_URL}/home-seller/product`,
      },
      {
        name: "Архив",
        url: `${BASE_URL}/home-seller/product/archive`,
      },
      {
        name: "Отзывы",
        url: `${BASE_URL}/home-seller/product/reviews`,
      },
      {
        name: "Вопросы",
        url: `${BASE_URL}/home-seller/product/questions`,
      },
      {
        name: "Рукомендации",
        url: `${BASE_URL}/home-seller/product/recommendations`,
      },
    ],
  },
  {
    name: "Заказы",
    url: `${BASE_URL}/home-seller/orders`,
    links: OrdersLinks,
    listMenu: [
      {
        name: "Все",
        url: `${BASE_URL}/home-seller/orders`,
      },
      {
        name: "Активные",
        url: `${BASE_URL}/home-seller/orders/activeorders`,
      },
      {
        name: "Завешенные",
        url: `${BASE_URL}/home-seller/orders/completedorders`,
      },
    ],
  },
];
