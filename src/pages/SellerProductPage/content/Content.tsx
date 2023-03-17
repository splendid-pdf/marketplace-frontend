import React, { useState, useEffect } from "react";
import classes from "./Content.module.scss";
import axios from "axios";
import { MySelect } from "./mySelect/MySelect";
import { PaginationComponent } from "./pagination/PaginationComponent";
import ProductTable from "./table/ProductTable";
import ProductActions from "./productActions/ProductActions";
import { PRODUCTS_SELLER_URL } from "shared/constants/productsSeller_url";

const SELLER_ID = "00b970fb-f78d-403a-a114-5e05b3e404f9";

const Content: React.FC = () => {
  const space = 2;
  const [limit, setLimit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState([]);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const { data } = await axios.get(
          // eslint-disable-next-line max-len
          `${PRODUCTS_SELLER_URL}/${SELLER_ID}/products?method=PRODUCT_LIST&page=${currentPage}&size=${limit}&sort=price`,
        );
        setProducts(data.content);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSellerProducts();
  }, [limit, currentPage]);

  // const startIndex = (currentPage - 1) * limit;
  // const endIndex = startIndex + limit;
  // const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className={classes.Content}>
      <ProductActions />
      <ProductTable products={products} />
      <div className={classes.Container}>
        <MySelect onChange={setLimit} />
        <PaginationComponent
          spacing={space}
          totalProducts={500}
          selectedCount={limit}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default Content;
