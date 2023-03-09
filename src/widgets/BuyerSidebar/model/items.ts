import { BASE_URL } from "shared/constants/base_url";

export interface BuyerSidebarItemType {
  url: string;
  name: string;
}

export const BuyerSidebarItemsList: BuyerSidebarItemType[] = [
  {
    url: `details`,
    name: "Личные данные",
  },
  {
    url: `orders/my-orders`,
    name: "Мои заказы",
  },
  {
    url: `/${BASE_URL}/favorites`,
    name: "Избранное",
  },
  {
    url: `feedback`,
    name: "Отзывы и вопросы о товарах",
  },
  {
    url: `settings`,
    name: "Настройки и уведомления",
  },
];
