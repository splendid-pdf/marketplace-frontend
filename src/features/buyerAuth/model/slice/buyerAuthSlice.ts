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
import { isTokenValid } from '../../utils/tokenValidation';

const initialState: BuyerAuthSchema = {
  id: undefined,
  loading: false,
  isAuth: false,
  role: undefined,
};

export const buyerAuthSlice = createSlice({
  name: 'buyerAuth',
  initialState,
  reducers: {
    setRegData: (state, action: PayloadAction<string>) => {
      setItemToLS(LS_KEY_BUYER_ID, action.payload);
    },
    setAuthData: (state, action: PayloadAction<BuyerAuthResponse>) => {
      state.isAuth = true;
      localStorage.setItem(LS_KEY_ROLE, 'buyer');
      localStorage.setItem(LS_KEY_BUYER_ACCESS_TOKEN, action.payload.token);
    },
    initAuthData: (state) => {
      const token = localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN);
      (token && isTokenValid(token)) ? state.isAuth = true : state.isAuth = false;    
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.clear();
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
        state.errorOnRegister = action.error.message as string;
      })
      .addCase(loginBuyer.pending, (state) => {
        state.loading = true;
      }) 
      .addCase(loginBuyer.fulfilled, (state) => {
        state.isAuth = true;
        state.loading = false;
      })
      .addCase(loginBuyer.rejected, (state, action) => {
        state.isAuth = false;
        state.loading = false;
        state.errorOnLogin = action.error.message as string;
      })
  }
});

export const { actions: buyerAuthActions } = buyerAuthSlice;
export const { reducer: buyerAuthReducer } = buyerAuthSlice;
