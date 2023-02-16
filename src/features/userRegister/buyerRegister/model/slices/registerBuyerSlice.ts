import { AxiosResponse } from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ErrorMessages } from 'shared/constants/errorMessages';
import { API_REGISTER_BUYER_URL } from 'shared/api/apiEndpoints';
import { RegisterBuyerSchema } from '../types/RegisterBuyerSchema';
import { axiosInstance } from '../../../../../shared/api/axiosInstance';
import { LS_KEY_BUYER_ID } from '../../../../../shared/constants/localStorage';

// TODO: Возможно этот весь функционал нужно будет просто удалить - 
// в стейт ничего из регистрации покупателя заносить не нужно, разве что id покупателя

const initialState = {
  id: ''
};

export const registerBuyer = createAsyncThunk(
  'buyer/registerBuyer',
  async (registerData: RegisterBuyerSchema, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axiosInstance.post(
        API_REGISTER_BUYER_URL, 
        JSON.stringify({ registerData}),
        {
          headers: {'Content-Type': 'application/json'},
          withCredentials: true, 
        });
      if (!res.data) {
        throw new Error(ErrorMessages.NOT_FOUND);
      }

      localStorage.setItem(LS_KEY_BUYER_ID, JSON.stringify(res.data.id));
      dispatch(setRegData(res.data.id));
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
      state = {
        ...state,
        id: action.payload,
      };
    },
  },
});

export const { setRegData } = registerBuyerSlice.actions;

export const registerBuyerReducer = registerBuyerSlice.reducer;
