import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  BuyerAuth, 
  BuyerAuthResponse, 
  BuyerAuthSchema,
} from '../types/BuyerAuthSchema';
import { 
  LS_KEY_BUYER_ACCESS_TOKEN, 
  LS_KEY_BUYER_AUTH_DATA, 
  LS_KEY_BUYER_ID, 
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
  token: undefined,
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
      state.isReg = localStorage.getItem(LS_KEY_BUYER_ID) != null ? true : false;
    },
    setAuthData: (state, action: PayloadAction<BuyerAuthResponse>) => {
      state.isAuth = true;
      state.role = 'buyer';
      localStorage.setItem(LS_KEY_ROLE, 'buyer');
      localStorage.setItem(LS_KEY_BUYER_ACCESS_TOKEN, action.payload.token);
    },
    initAuthData: (state) => {
      const token = localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN);
      token ? state.isAuth = true : state.isAuth = false;    
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
      })
      .addCase(loginBuyer.rejected, (state, action) => {
        state.isAuth = false;
        state.errorOnLogin = action.payload as string;
      })
  }
});

export const { actions: buyerAuthActions } = buyerAuthSlice;
export const { reducer: buyerAuthReducer } = buyerAuthSlice;
