import { Product } from "shared/api/types";
import React from "react";
import { ReactComponent as EditIcon } from "../../../../shared/images/icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../../../../shared/images/icons/delete.svg";
import classes from "./ProductTable.module.scss";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";

type Props = {
  products: Product[];
};

export const ProductTable = ({ products }: Props) => {
  return (
    <div className={classes.Table}>
      <div className={classes.TableHead}>
        <div className={classes.HeadRow}>
          <Checkbox style={{ padding: 0 }} />
          <div className={classes.HeaderCell} style={{ width: "4rem" }}>
            Фото
          </div>
          <div className={classes.HeaderCell} style={{ width: "10rem" }}>
            Название
            <button></button>
          </div>
          <div className={classes.HeaderCell} style={{ width: "5rem" }}>
            Артикул
            <button></button>
          </div>
          <div className={classes.HeaderCell} style={{ width: "5rem" }}>
            Цена
          </div>
          <div className={classes.HeaderCell} style={{ width: "6rem" }}>
            Склад
          </div>
          <div className={classes.HeaderCell} style={{ width: "6rem" }}>
            В продаже
          </div>
          <div className={classes.HeaderCell} style={{ width: "6rem" }}>
            Категория
          </div>
          <div className={classes.HeaderCell} style={{ width: "6rem" }}>
            Тип
            <button className={classes.SortType}></button>
          </div>
          <div className={classes.HeaderCell} style={{ width: "8rem" }}>
            Дата создания
          </div>
          <div className={classes.HeaderCell} style={{ width: "4rem" }}></div>
        </div>
      </div>
      <div className={classes.TableBody}>
        {products.map((product) => (
          <div key={product.externalId} className={classes.BodyRow}>
            <Checkbox style={{ padding: 0 }} />
            <div style={{ width: "4rem" }}>
              <img
                className={classes.ContentRowImage}
                src={product.productImages}
                alt={product.name}
              />
            </div>
            <div className={classes.BodyCell} style={{ width: "10rem" }}>
              {product.name}
            </div>
            <div className={classes.BodyCell} style={{ width: "5rem" }}>
              {product.articleFromSeller}
            </div>
            <div className={classes.BodyCell} style={{ width: "5rem" }}>
              {product.price}
            </div>
            <div className={classes.BodyCell} style={{ width: "6rem" }}>
              {product.count}
            </div>
            <div className={classes.BodyCell} style={{ width: "6rem" }}>
              {product.isVisible ? "есть" : "нет"}
            </div>
            <div className={classes.BodyCell} style={{ width: "6rem" }}>
              {product.type.name}
            </div>
            <div className={classes.BodyCell} style={{ width: "6rem" }}>
              {product.type.name}
            </div>
            <div className={classes.BodyCell} style={{ width: "7rem" }}>
              {product.creationDate}
            </div>
            <div className={classes.ButtonsCell} style={{ width: "5rem" }}>
              <Link className={classes.Button} to={`?popup=deleteOneProduct`}>
                <DeleteIcon />
              </Link>

              <button className={classes.Button}>
                <EditIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
