import React from "react";
import { getAll } from "shared/api/fixtures/library/products";
import Content from "./content/Content";


const SellerProductPage: React.FC = () => {
  const products = getAll()
  return (
    <div>
      <Content/>
    </div>
  );
};
export default SellerProductPage;
