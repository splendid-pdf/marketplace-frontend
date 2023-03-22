export interface SellerSidebarItemType {
  url: string;
  name: string;
}

export const SellerSidebarItemsList: SellerSidebarItemType[] = [
  {
    url: `details`,
    name: "Личные данные",
  },
  {
    url: `shops`,
    name: "Мои магазины",
  },
  {
    url: `accesses`,
    name: "Доступы",
  },
  {
    url: `notifications`,
    name: "Уведомления",
  },
];
