import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { API_REGISTER_BUYER_URL } from 'shared/api/apiEndpoints';
import { axiosInstance } from 'shared/api/axiosInstance';
import { buyerAuthActions } from './buyerAuthSlice';
import { BuyerAuth } from '../types/BuyerAuthSchema';

export const registerBuyer = createAsyncThunk(
  'buyerAuth/register',
  async (registerData: BuyerAuth, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        API_REGISTER_BUYER_URL, 
        registerData,
      );
      dispatch(buyerAuthActions.setRegData(res.data));
      return res.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);