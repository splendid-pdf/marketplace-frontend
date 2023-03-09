import React from 'react';
import card1 from "../../shared/images/products/card1.png";
import card2 from "../../shared/images/products/card2.png";
import card3 from "../../shared/images/products/card3.png";
import card4 from "../../shared/images/products/card4.png";
import card5 from "../../shared/images/products/card5.png";
import card6 from "../../shared/images/products/card6.png";

export interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

export const test: Product[] = [
  {
    id: 1,
    image: card1,
    price: "999999",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    id: 2,
    image: card2,
    price: "999999",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    id: 3,
    image: card3,
    price: "999999",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    id: 4,
    image: card4,
    price: "999999",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    id: 5,
    image: card5,
    price: "999999",
    title: "Le Klint / Настольная лампа LED",
  },
  {
    id: 6,
    image: card6,
    price: "999999",
    title: "Le Klint / Настольная лампа LED",
  },
];

interface Shop {
  id: number;
  title: string;
  image: string;
}

export const test2: Shop[] = [
  {
    id: 1,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 2,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 3,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 4,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 5,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 6,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 7,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 8,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 9,
    image: card1,
    title: "SHOP test test test",
  },
  {
    id: 10,
    image: card1,
    title: "SHOP test test test",
  },
];