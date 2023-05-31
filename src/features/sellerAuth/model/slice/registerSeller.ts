import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { axiosInstance } from 'shared/api/axiosInstance';
import { API_REGISTER_SELLER_URL } from 'shared/api/apiEndpoints';
import { sellerAuthActions } from './sellerAuthSlice';
import { SellerAuth } from '../types/SellerAuthSchema';

export const registerSeller= createAsyncThunk(
  'sellerAuth/register',
  async (registerData: SellerAuth, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        API_REGISTER_SELLER_URL, 
        registerData,
      );
      dispatch(sellerAuthActions.setRegData(res.data));
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