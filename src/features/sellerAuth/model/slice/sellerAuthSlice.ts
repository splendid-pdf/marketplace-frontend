import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SellerAuthResponse, SellerAuthSchema } from '../types/SellerAuthSchema';
import { 
  LS_KEY_SELLER_ACCESS_TOKEN, 
  LS_KEY_SELLER_ID, 
  LS_KEY_ROLE 
} from 'shared/constants/localStorage';
import { loginSeller } from './loginSeller';
import { registerSeller } from './registerSeller';
import { setItemToLS } from 'shared/utils/setItemToLS';
import { isTokenValid } from 'features/utils/tokenValidation';

const initialState: SellerAuthSchema = {
  id: undefined,
  loading: false,
  isAuth: false,
  role: undefined,
};

export const sellerAuthSlice = createSlice({
  name: 'sellerAuth',
  initialState,
  reducers: {
    setRegData: (state, action: PayloadAction<string>) => {
      setItemToLS(LS_KEY_SELLER_ID, action.payload);
    },

    setAuthData: (state, action: PayloadAction<SellerAuthResponse>) => {
      state.isAuth = true;
      localStorage.setItem(LS_KEY_ROLE, 'seller');
      localStorage.setItem(LS_KEY_SELLER_ACCESS_TOKEN, action.payload.token);
    },
    
    initAuthData: (state) => {
      const token = localStorage.getItem(LS_KEY_SELLER_ACCESS_TOKEN);
      (token && isTokenValid(token)) ? state.isAuth = true : state.isAuth = false;    
    },
    
    logout: (state) => {
      state.isAuth = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerSeller.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerSeller.fulfilled, (state) => {
        state.loading = false;
        state.isReg = true;
      })
      .addCase(registerSeller.rejected, (state, action) => {
        state.loading = false;
        state.errorOnRegister = action.error.message as string;
      })
      .addCase(loginSeller.pending, (state) => {
        state.loading = true;
      }) 
      .addCase(loginSeller.fulfilled, (state) => {
        state.isAuth = true;
        state.loading = false;
      })
      .addCase(loginSeller.rejected, (state, action) => {
        state.isAuth = false;
        state.loading = false;
        state.errorOnLogin = action.error.message as string;
      })
  }
});

export const { actions: sellerAuthActions } = sellerAuthSlice;
export const { reducer: sellerAuthReducer } = sellerAuthSlice;