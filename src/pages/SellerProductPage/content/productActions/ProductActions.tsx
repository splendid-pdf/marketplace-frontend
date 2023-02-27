/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import InputSearch from 'shared/ui/InputSearch/InputSearch';
import classes from './ProductActions.module.scss';
import { ButtonMarketPlace } from "shared/ui/Button/ButtonMarketPlace";


const ProductActions = () => {

  const [value, setValue] = useState("");


  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value)  };

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
      <ButtonMarketPlace
        className={classes.btn}
        text="Создать новый товар"
      />
      <ButtonMarketPlace
        className={classes.btn}
        text="Снять с продажи"
      />
      <ButtonMarketPlace
        className={classes.btn}
        text="Выставить на продажу"
      />
      <ButtonMarketPlace
        className={classes.btn}
        text="Удалить данные"
      />
      
    </div>
  );
}

export default ProductActions;