export type Product = {
  productImages: string;
  externalId: number;
  name: string;
  price: number;
  articleFromSeller: string;
  sale: boolean;
  count: number;
  isVisible: true;
  category: Category;
  type: Type;
  creationDate: string;
};

export type Category = {
  id: number;
  name: string;
};

export type Type = {
  id: number;
  name: string;
};
