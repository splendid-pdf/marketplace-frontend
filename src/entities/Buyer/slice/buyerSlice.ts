import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LS_KEY_BUYER } from 'shared/constants/localStorage';
import { Buyer, BuyerSchema } from '../types/buyer';

const initialState: BuyerSchema = {
};

export const buyerSlice = createSlice({
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

export const { actions: buyerActions } = buyerSlice;
export const { reducer: buyerReducer } = buyerSlice;
