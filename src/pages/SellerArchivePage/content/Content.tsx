import React, { useState } from "react";
import { getAll } from "shared/api/fixtures/library/products";
import {MySelect} from "./mySelect/MySelect";
import { PaginationComponent } from "./pagination/PaginationComponent";
import ProductTable from "./table/ProductTable";
import classes from './Content.module.scss';
import ProductActions from "./productActions/ProductActions";


const Content: React.FC = () => {
  const products = getAll()
  const space = 2;
  const [limit, setLimit] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className={classes.Content}>
      <ProductActions/>
      <ProductTable
        products={currentProducts}
      />
      <div className={classes.Container}>
        <MySelect
          onChange={setLimit}
        />
        <PaginationComponent
          spacing={space}
          totalProducts={products.length}
          selectedCount={limit}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default Content;