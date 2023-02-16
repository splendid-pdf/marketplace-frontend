import { AxiosResponse } from 'axios';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorMessages } from 'shared/constants/errorMessages';
import { API_LOGIN_BUYER_URL } from 'shared/api/apiEndpoints';
import { AuthBuyerSchema, Buyer } from '../types/AuthBuyerSchema';
import { axiosInstance } from '../../../../../shared/api/axiosInstance';
import { LS_KEY_BUYER, LS_KEY_BUYER_AUTH_DATA } from '../../../../../shared/constants/localStorage';


const initialState: AuthBuyerSchema = {};

interface AuthBuyerProps {
  email: string;
  password: string;
}

export const authenticateBuyer = createAsyncThunk(
  'buyer/authenticateBuyer',
  async (authData: AuthBuyerProps, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        API_LOGIN_BUYER_URL, 
        JSON.stringify({ authData }),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true, 
        });
      if (!res.data) {
        throw new Error(ErrorMessages.NOT_FOUND);
      }

      localStorage.setItem(LS_KEY_BUYER_AUTH_DATA, JSON.stringify(res.data));
      dispatch(setAuthData(res.data));
      return res.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(ErrorMessages.BAD_REGISTRATION_REQUEST);
    }
  },
);

export const authenticateBuyerSlice = createSlice({
  name: 'buyer',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<Buyer>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const buyer = localStorage.getItem(LS_KEY_BUYER);
      if (buyer) {
        state.authData = JSON.parse(buyer);
      }
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LS_KEY_BUYER);
    },
  },
});

export const { setAuthData, initAuthData, logout } = authenticateBuyerSlice.actions;

export const authenticateBuyerReducer = authenticateBuyerSlice.reducer;

