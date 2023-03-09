
export interface BuyerSidebarItemType {
  url: string;
  name: string;
}

export const BuyerSidebarItemsList: BuyerSidebarItemType[] = [
  {
    url: `details`,
    name: 'Личные данные',
  },
  {
    url: `orders`,
    name: 'Мои заказы',
  },
  {
    url: `favorites`,
    name: 'Избранное',
  },
  {
    url: `feedback`,
    name: 'Отзывы и вопросы о товарах',
  },
  {
    url: `settings`,
    name: 'Настройки и уведомления',
  },
];
