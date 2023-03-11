import { GET_ENUMS } from "shared/constants/parametersPopup";

import useGetPopupState from "./hooks/useGetPopupState";

import { AuthBuyerForm, RegisterBuyerForm } from "features/buyerAuth";
import {
  ModalStopSale,
  ModalPutUpSale,
  ModalDeleteProducts,
  ModalDeleteOneProduct,
} from "../SellerProductPage/content/modalActions/modalActions";

const popups = {
  [GET_ENUMS.popup.loginUser]: AuthBuyerForm,
  [GET_ENUMS.popup.registerUser]: RegisterBuyerForm,
  [GET_ENUMS.popup.stopSale]: ModalStopSale,
  [GET_ENUMS.popup.putUpSale]: ModalPutUpSale,
  [GET_ENUMS.popup.deleteProducts]: ModalDeleteProducts,
  [GET_ENUMS.popup.deleteOneProduct]: ModalDeleteOneProduct,
};

const GetParameterPopups = () => {
  const { mountedPopup, isOpened } = useGetPopupState();

  const Component = mountedPopup !== null && popups[mountedPopup];

  if (!Component) {
    return null;
  }

  return <Component isOpened={isOpened} />;
};

export default GetParameterPopups;
