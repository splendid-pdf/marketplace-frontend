import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { API_LOGIN_BUYER_URL } from 'shared/api/apiEndpoints';
import { axiosInstance } from 'shared/api/axiosInstance';
import { ErrorMessages } from 'shared/constants/errorMessages';
import { 
  LS_KEY_BUYER_ACCESS_TOKEN, 
  LS_KEY_ROLE 
} from 'shared/constants/localStorage';
import { BuyerAuth } from '../types/BuyerAuthSchema';
import { buyerAuthActions } from './buyerAuthSlice';
import { buyerProfileActions, fetchBuyerProfileData } from '../../../../entities/BuyerProfile';

export const loginBuyer = createAsyncThunk(
  'buyerAuth/login',
  async(authData: BuyerAuth, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(API_LOGIN_BUYER_URL,
        authData,
      );

      if (!res.data) {
        throw new Error(ErrorMessages.BAD_LOGIN_REQUEST);
      }
      const buyer = res.data;
      dispatch(buyerAuthActions.setAuthData(buyer.id));
      localStorage.setItem(LS_KEY_ROLE, 'buyer');
      localStorage.setItem(LS_KEY_BUYER_ACCESS_TOKEN, res.data.token);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);