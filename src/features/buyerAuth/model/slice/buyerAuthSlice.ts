import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  BuyerAuth, 
  BuyerAuthSchema,
  BuyerRegResponse, 
} from '../types/BuyerAuthSchema';
import { 
  LS_KEY_BUYER_ACCESS_TOKEN, 
  LS_KEY_BUYER_AUTH_DATA, 
  LS_KEY_ROLE 
} from 'shared/constants/localStorage';
import { loginBuyer } from './loginBuyer';
import { registerBuyer } from './registerBuyer';

const initialState: BuyerAuthSchema = {
  id: undefined,
  loading: false,
  isReg: false,
  isAuth: false,
  accessToken: undefined,
  authData: undefined,
  role: undefined,
};

export const buyerAuthSlice = createSlice({
  name: 'buyerAuth',
  initialState,
  reducers: {
    setRegData: (state, action: PayloadAction<BuyerRegResponse>) => {
      state.id = action.payload.id;
      state.isReg = true;
      state.error = action.payload.error;
    },
    setAuthData: (state, action: PayloadAction<BuyerAuth>) => {
      state.isAuth = true;
      state.role = 'buyer';
      state.authData = action.payload;
      localStorage.setItem(LS_KEY_ROLE, 'buyer');
    },
    initAuthData: (state) => {
      const buyer = localStorage.getItem(LS_KEY_BUYER_AUTH_DATA);
      if (buyer) {
        state.authData = JSON.parse(buyer);
      }      
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LS_KEY_BUYER_AUTH_DATA);
      localStorage.removeItem(LS_KEY_BUYER_ACCESS_TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerBuyer.fulfilled, (state) => {
        state.loading = false;
        state.isReg = true;
      })
      .addCase(registerBuyer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginBuyer.pending, (state) => {
        state.loading = true;
      }) 
      .addCase(loginBuyer.fulfilled, (state) => {
        state.isAuth = true;
        localStorage.setItem(LS_KEY_ROLE, 'buyer');
      })
      .addCase(loginBuyer.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.payload;
      })
  }
});

export const { actions: buyerAuthActions } = buyerAuthSlice;
export const { reducer: buyerAuthReducer } = buyerAuthSlice;
