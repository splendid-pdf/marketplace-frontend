import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBuyerProfileData } from '../services/fetchBuyerProfileData/fetchBuyerProfileData';
import { updateBuyerProfileData } from '../services/updateBuyerProfileData/updateBuyerProfileData';
import { BuyerProfile, BuyerProfileSchema } from '../buyerProfile.types';

const initialState: BuyerProfileSchema = {
  isLoading: false,
  readonly: true,
  errorOnProfile: undefined,
  data: undefined,
};

export const buyerProfileSlice = createSlice({
  name: 'buyerProfile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<BuyerProfile>) => {
      state.data = action.payload;
    },

    setReadonly: (state, action: PayloadAction<boolean>) => {
      console.log('setReadonly', action.payload);
      state.readonly = action.payload;
    },

    cancelEdit: (state) => {
      state.readonly = true;
    },

    updateProfile: (state, action: PayloadAction<BuyerProfile>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
      state.readonly = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuyerProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBuyerProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchBuyerProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorOnProfile = action.error.message;
      })
      .addCase(updateBuyerProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateBuyerProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateBuyerProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorOnProfile = action.error.message;
      });
  }
});

export const { actions: buyerProfileActions } = buyerProfileSlice;
export const { reducer: buyerProfileReducer } = buyerProfileSlice;
