/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import InputSearch from "shared/ui/InputSearch/InputSearch";
import classes from "./ProductActions.module.scss";
import { ButtonMarketPlace } from "shared/ui/Button/ButtonMarketPlace";
import { ModalDeleteProducts, ModalPutUpSale, ModalStopSale } from "../modalActions/modalActions";
import { useLocation } from "react-router-dom";
import { BASE_URL } from "shared/constants/base_url";

const ProductActions = () => {
  const [value, setValue] = useState("");
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value);
  };

  const onSearch = (searchTerm: string) => {
    console.log("search", searchTerm);
  };

  return (
    <div className={classes.Container}>
      <InputSearch
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        placeholder="Название товара или артикул"
      />
      <ButtonMarketPlace className={classes.btn} text="Создать новый товар" />
      <ButtonMarketPlace
        className={classes.btn}
        text="Снять с продажи"
        to={`${path}?popup=stopSale`}
      />
      <ButtonMarketPlace
        className={classes.btn}
        text="Выставить на продажу"
        to={`${path}?popup=putUpSale`}
      />
      <ButtonMarketPlace
        className={classes.btn}
        text="Удалить данные"
        to={`${path}?popup=deleteProducts`}
      />
    </div>
  );
};

export default ProductActions;
