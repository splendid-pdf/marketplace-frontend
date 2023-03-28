import { useState } from 'react';
import { 
  categoryNewProduct, 
  typeNewProduct } from 'shared/constants/characteristic_create_new_product';
import { ButtonMarketPlace } from '../Button/ButtonMarketPlace';
import InputDropdownMenu from '../InputDropdownMenu/InputDropdownMenu';
import classes from "./ModalContentCreateNewProduct.module.scss"
import { BASE_URL } from "shared/constants/base_url";

export const ModalContentCreateNewProduct = () => {
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');

  return (
    <div>
      <div className={classes.textContainer}>
        <span>Категория</span>
        <span>Тип</span>
      </div>
      <div className={classes.inputDropContainer}>
        <InputDropdownMenu onSave={setCategory} values={categoryNewProduct}/>
        <InputDropdownMenu onSave={setType} values={typeNewProduct}/>
      </div>
      <div className={classes.boxBtn}>
        <ButtonMarketPlace 
          disable={!type || !category}
          to=
            {`${BASE_URL}/home-seller/product/create-new-product?type=${
              type}&category=${category}`} 
          text="Продолжить"/>
      </div>
    </div>
  );
};
