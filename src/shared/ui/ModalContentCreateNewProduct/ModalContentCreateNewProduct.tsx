import { useState, useEffect } from "react";
import { ButtonMarketPlace } from "../Button/ButtonMarketPlace";
import InputDropdownMenu from "../InputDropdownMenu/InputDropdownMenu";
import classes from "./ModalContentCreateNewProduct.module.scss";
import axios from "axios";
import { BASE_URL } from "shared/constants/base_url";
import { API_CATEGORIES_PRODUCT_URL, API_TYPES_PRODUCT_URL } from "shared/api/apiEndpoints";

export const ModalContentCreateNewProduct = () => {
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedTypeID, setSelectedTypeID] = useState("");
  const [selectedCategoryID, setSelectedCategoryID] = useState("");

  useEffect(() => {
    async function fetchAllRoomsAndTypes() {
      try {
        const { data: dataCategories } = await axios.get(API_CATEGORIES_PRODUCT_URL);
        const { data: dataTypes } = await axios.get(API_TYPES_PRODUCT_URL);
        setCategories(dataCategories);
        setTypes(dataTypes);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllRoomsAndTypes();
  }, []);

  const fetchTypesByRoom = async (categoryID: string) => {
    try {
      const { data } = await axios.get(`${API_CATEGORIES_PRODUCT_URL}/${categoryID}/types`);
      setTypes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const categorySelection = (id: string) => {
    setSelectedTypeID("");
    fetchTypesByRoom(id);
    setSelectedCategoryID(id);
  };

  return (
    <div>
      <div className={classes.textContainer}>
        <span>Категория</span>
        <span>Тип</span>
      </div>
      <div className={classes.inputDropContainer}>
        <InputDropdownMenu
          onSave={categorySelection}
          values={categories}
          selected={selectedCategoryID}
        />
        <InputDropdownMenu onSave={setSelectedTypeID} values={types} selected={selectedTypeID} />
      </div>
      <div className={classes.boxBtn}>
        <ButtonMarketPlace
          disable={!selectedTypeID || !selectedCategoryID}
          // eslint-disable-next-line max-len
          to={`${BASE_URL}/home-seller/product/create-new-product?type=${selectedTypeID}`}
          text="Продолжить"
        />
      </div>
    </div>
  );
};
