import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { registerBuyerUrl } from '../../../../shared/constants/apiEndpoints';
import { RegisterBuyerSchema } from '../types/RegisterBuyerSchema';
import { ErrorMessages } from '../../../../shared/constants/errorMessages';


const initialState = {
  buyer: {
    login: '',
    password: '',
    error: null,
    isLoading: false,
    role: 'buyer',
  } as RegisterBuyerSchema
};

interface RegisterBuyerProps {
  username: string;
  password: string;
}

export const registerBuyer = createAsyncThunk(
  'buyer/registerBuyer',
  async(registerData: RegisterBuyerProps, { rejectWithValue, dispatch }) => {
    try {
      const res: AxiosResponse = await axios.post(registerBuyerUrl, {
        registerData
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
  }
);

export const registerBuyerSlice = createSlice({
  name: 'buyer',
  initialState, 
  reducers: {
    setRegData: (state, action) => {
      state.buyer = action.payload;
    }
  }
});

export const { setRegData } = registerBuyerSlice.actions;

export const registerBuyerReducer = registerBuyerSlice.reducer;