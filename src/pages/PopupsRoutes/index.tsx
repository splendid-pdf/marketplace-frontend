import React from 'react';

import { GET_ENUMS } from 'shared/constants/parametersPopup';

import useGetPopupState from './hooks/useGetPopupState';

import { AuthBuyerForm } from 'features/userAuth/buyerAuth';
import { RegisterBuyerForm } from 'features/userRegister/buyerRegister';

const popups = {
  [GET_ENUMS.popup.loginUser]: AuthBuyerForm,
  [GET_ENUMS.popup.registerUser]: RegisterBuyerForm,
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
