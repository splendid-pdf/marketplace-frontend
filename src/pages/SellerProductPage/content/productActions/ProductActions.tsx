/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import InputSearch from "shared/ui/InputSearch/InputSearch";
import classes from "./ProductActions.module.scss";
import { ButtonMarketPlace } from "shared/ui/Button/ButtonMarketPlace";
import { ModalDeleteProducts, ModalPutUpSale, ModalStopSale } from "../modalActions/modalActions";

const ProductActions = () => {
  const [value, setValue] = useState("");
  const [isOpenModalStopSale, setIsOpenModalStopSale] = useState(false);
  const [isOpenModalPutUpSale, setIsOpenModalPutUpSale] = useState(false);
  const [isOpenModalDeleteProducts, setIsOpenModalDeleteProducts] = useState(false);

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
        // onClick={() => setIsOpenModalStopSale((prev) => !prev)}
      />
      <ModalStopSale
        isOpened={isOpenModalStopSale}
        onClose={() => setIsOpenModalStopSale((prev) => !prev)}
      />
      <ButtonMarketPlace
        className={classes.btn}
        text="Выставить на продажу"
        // onClick={() => setIsOpenModalPutUpSale((prev) => !prev)}
      />
      <ModalPutUpSale
        isOpened={isOpenModalPutUpSale}
        onClose={() => setIsOpenModalPutUpSale((prev) => !prev)}
      />
      <ButtonMarketPlace
        className={classes.btn}
        text="Удалить данные"
        // onClick={() => setIsOpenModalDeleteProducts((prev) => !prev)}
      />
      <ModalDeleteProducts
        isOpened={isOpenModalDeleteProducts}
        onClose={() => setIsOpenModalDeleteProducts((prev) => !prev)}
      />
    </div>
  );
};

export default ProductActions;
