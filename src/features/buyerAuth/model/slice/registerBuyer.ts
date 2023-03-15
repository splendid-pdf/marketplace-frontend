import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { API_REGISTER_BUYER_URL } from 'shared/api/apiEndpoints';
import { axiosInstance } from 'shared/api/axiosInstance';
import { buyerAuthActions } from './buyerAuthSlice';
import { BuyerAuth } from '../types/BuyerAuthSchema';

export const registerBuyer = createAsyncThunk(
  'buyerAuth/register',
  async (registerData: BuyerAuth, { rejectWithValue, dispatch }) => {
    // dispatch(buyerAuthActions.setRegData({id:'fake_id', role: 'buyer'}));
    const headers = {
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin" : API_REGISTER_BUYER_URL, // your request url
      "Access-Control-Allow-Methods" : "POST, GET, OPTIONS" // supported methods
    }
    try {
      // const res: AxiosResponse = await axiosInstance.post(
      //   API_REGISTER_BUYER_URL, 
      //   registerData,
      // );
      const res = await axios.post(
        API_REGISTER_BUYER_URL,
        registerData,
        // { headers: headers }
      );
      dispatch(buyerAuthActions.setRegData({id: res.data.id}));
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