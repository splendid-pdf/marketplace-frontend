export type Product = {
  img: string;
  id: number;
  title: string;
  price: number;
  stock: number;
  sale: boolean;
  category: Category;
  type: Type;
  dateTime: string;
}

export type Category = {
  id: number;
  name: string;
};

export type Type = {
  id: number;
  name: string;
};
