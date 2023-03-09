import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Buyer, BuyerSchema } from '../types/buyer';
import { LS_KEY_BUYER_AUTH_DATA, LS_KEY_BUYER_ID } from 'shared/constants/localStorage';
import { axiosInstance } from 'shared/api/axiosInstance';
import { API_LOGIN_BUYER_URL } from 'shared/api/apiEndpoints';
import { AxiosResponse } from 'axios';
import { ErrorMessages } from 'shared/constants/errorMessages';

const initialState: BuyerSchema = {
  _mounted: false,
};

export const authenticateBuyer = createAsyncThunk(
  'buyer/authenticateBuyer',
  async(authData: Buyer, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(API_LOGIN_BUYER_URL,
        JSON.stringify({authData}),
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

      localStorage.setItem(LS_KEY_BUYER_ID, JSON.stringify(res.data.id));
      return res.data;
    } catch (error) {
      rejectWithValue(error);
      console.error(error);
    }
  }
);

export const buyerAuthSlice = createSlice({
  name: 'buyer',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<Buyer>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const buyer = localStorage.getItem(LS_KEY_BUYER_AUTH_DATA);
      if (buyer) {
        state.authData = JSON.parse(buyer);
      }
      state._mounted = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LS_KEY_BUYER_AUTH_DATA);
    },
  },
});

export const { actions: buyerAuthActions } = buyerAuthSlice;
export const { reducer: buyerAuthReducer } = buyerAuthSlice;
