/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { API_LOGIN_SELLER_URL } from 'shared/api/apiEndpoints';
import { axiosInstance } from 'shared/api/axiosInstance';
import { ErrorMessages } from 'shared/constants/errorMessages';
import { 
  LS_KEY_SELLER_ACCESS_TOKEN, 
  LS_KEY_SELLER_ID, 
  LS_KEY_ROLE 
} from 'shared/constants/localStorage';
import { SellerAuth } from '../types/SellerAuthSchema';
import { sellerAuthActions } from './sellerAuthSlice';

export const loginSeller = createAsyncThunk(
  'sellerAuth/login',
  async(authData: SellerAuth, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(API_LOGIN_SELLER_URL ,
        authData,
      );

      if (!res.data) {
        throw new Error(ErrorMessages.BAD_LOGIN_REQUEST);
      }
      const seller = res.data;
      dispatch(sellerAuthActions.setAuthData(seller.id));
      localStorage.setItem(LS_KEY_ROLE, 'seller');
      localStorage.setItem(LS_KEY_SELLER_ACCESS_TOKEN, res.data.token);
      localStorage.setItem(LS_KEY_SELLER_ID, res.data.id);
      return res.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);