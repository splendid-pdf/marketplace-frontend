import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  BuyerAuth, 
  BuyerAuthSchema,
} from '../types/BuyerAuthSchema';
import { 
  LS_KEY_BUYER_ACCESS_TOKEN, 
  LS_KEY_BUYER_AUTH_DATA, 
  LS_KEY_BUYER_ID, 
  LS_KEY_BUYER_IS_REG, 
  LS_KEY_ROLE 
} from 'shared/constants/localStorage';
import { loginBuyer } from './loginBuyer';
import { registerBuyer } from './registerBuyer';
import { setItemToLS } from 'shared/utils/setItemToLS';

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
    setRegData: (state, action: PayloadAction<string>) => {
      state.isReg = true;
      setItemToLS(LS_KEY_BUYER_ID, action.payload);
    },
    initRegData: (state) => {
      state.isReg = localStorage.getItem(LS_KEY_BUYER_ID) != '' ? true : false;
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
      .addCase(registerBuyer.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerBuyer.fulfilled, (state) => {
        state.loading = false;
        state.isReg = true;
      })
      .addCase(registerBuyer.rejected, (state, action) => {
        state.loading = false;
        state.errorOnRegister = action.payload as string;
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
        state.errorOnLogin = action.payload as string;
      })
  }
});

export const { actions: buyerAuthActions } = buyerAuthSlice;
export const { reducer: buyerAuthReducer } = buyerAuthSlice;
