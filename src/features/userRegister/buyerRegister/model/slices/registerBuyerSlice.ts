import { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorMessages } from 'shared/constants/errorMessages';
import { API_REGISTER_BUYER_URL } from 'shared/api/apiEndpoints';
import { RegisterBuyerSchema } from '../types/RegisterBuyerSchema';
import { axiosInstance } from '../../../../../shared/api/axiosInstance';

// TODO: Возможно этот весь функционал нужно будет просто удалить - 
// в стейт ничего из регистрации покупателя заносить не нужно
const initialState = {
  buyer: {
    login: '',
    password: '',
    error: null,
    isLoading: false,
    role: 'buyer',
  } as RegisterBuyerSchema,
};

interface RegisterBuyerProps {
  username: string;
  password: string;
}

export const registerBuyer = createAsyncThunk(
  'buyer/registerBuyer',
  async (registerData: RegisterBuyerProps, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(API_REGISTER_BUYER_URL, {
        registerData,
      });
      if (!res.data) {
        throw new Error(ErrorMessages.NOT_FOUND);
      }

      localStorage.setItem('buyer', JSON.stringify(res.data));
      dispatch(setRegData(res.data));
      return res.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(ErrorMessages.BAD_REGISTRATION_REQUEST);
    }
  },
);

export const registerBuyerSlice = createSlice({
  name: 'buyer',
  initialState,
  reducers: {
    setRegData: (state, action) => {
      state.buyer = action.payload;
    },
  },
});

export const { setRegData } = registerBuyerSlice.actions;

export const registerBuyerReducer = registerBuyerSlice.reducer;
