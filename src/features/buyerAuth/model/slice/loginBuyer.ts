import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { API_LOGIN_BUYER_URL } from 'shared/api/apiEndpoints';
import { axiosInstance } from 'shared/api/axiosInstance';
import { ErrorMessages } from 'shared/constants/errorMessages';
import { 
  LS_KEY_BUYER_ACCESS_TOKEN, 
  LS_KEY_BUYER_AUTH_DATA, 
  LS_KEY_ROLE 
} from 'shared/constants/localStorage';
import { BuyerAuth } from '../types/BuyerAuthSchema';
import { buyerAuthActions } from './buyerAuthSlice';

export const loginBuyer = createAsyncThunk(
  'buyerAuth/login',
  async(authData: BuyerAuth, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(API_LOGIN_BUYER_URL,
        authData,
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true,
        });

      if (!res.data) {
        throw new Error(ErrorMessages.NOT_FOUND);
      }
      const buyer = res.data;
      dispatch(buyerAuthActions.setAuthData(buyer));
      localStorage.setItem(LS_KEY_BUYER_AUTH_DATA, JSON.stringify(buyer));
      localStorage.setItem(LS_KEY_ROLE, 'buyer');
      localStorage.setItem(LS_KEY_BUYER_ACCESS_TOKEN, res.headers['x-access-token']);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);