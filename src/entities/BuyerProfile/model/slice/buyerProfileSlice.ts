import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBuyerProfileData } from '../services/fetchBuyerProfileData/fetchBuyerProfileData';
import { updateBuyerProfileData } from '../services/updateBuyerProfileData/updateBuyerProfileData';
import { BuyerProfile, BuyerProfileSchema } from '../buyerProfile.types';

const initialState: BuyerProfileSchema = {
  isLoading: false,
  readonly: true,
  error: undefined,
  data: undefined,
};

export const buyerProfileSlice = createSlice({
  name: 'buyerProfile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },

    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
    },

    updateProfile: (state, action: PayloadAction<BuyerProfile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBuyerProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })

      .addCase(fetchBuyerProfileData.fulfilled, (state, action: PayloadAction<BuyerProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
      })

      .addCase(fetchBuyerProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateBuyerProfileData.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(updateBuyerProfileData.fulfilled, (state, action: PayloadAction<BuyerProfile>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.form = action.payload;
        state.readonly = true;
      })
  },
});

export const { actions: buyerProfileActions } = buyerProfileSlice;
export const { reducer: buyerProfileReducer } = buyerProfileSlice;
