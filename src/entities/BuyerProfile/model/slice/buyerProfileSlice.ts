import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBuyerProfileData } from '../services/fetchBuyerProfileData';
import { updateBuyerProfileData } from '../services/updateBuyerProfileData';
import { BuyerProfile, BuyerProfileSchema } from '../buyerProfile.types';
import { SuccessMessages } from '../../../../shared/constants/successMessages';

const initialState: BuyerProfileSchema = {
  isLoading: false,
  readonly: true,
  errorOnProfile: undefined,
  data: undefined,
  successMessage: undefined,
};

export const buyerProfileSlice = createSlice({
  name: 'buyerProfile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<BuyerProfile>) => {
      state.data = action.payload;
    },

    setPhotoUrl: (state, action: PayloadAction<string>) => {
      state.data = {
        ...state.data,
        photoUrl: action.payload,
      };
    },

    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },

    updateProfile: (state, action: PayloadAction<BuyerProfile>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuyerProfileData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBuyerProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorOnProfile = undefined;
        state.data = action.payload;
      })
      .addCase(fetchBuyerProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorOnProfile = action.error.message;
        state.successMessage = undefined;
      })
      .addCase(updateBuyerProfileData.pending, (state) => {
        state.isLoading = true;
        state.successMessage = undefined;
      })
      .addCase(updateBuyerProfileData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorOnProfile = undefined;
        state.data = action.payload;
        state.readonly = true;
        state.successMessage = SuccessMessages.SUCCESSFUL_PROFILE_UPDATE;
      })
      .addCase(updateBuyerProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.errorOnProfile = action.error.message;
      });
  }
});

export const { actions: buyerProfileActions } = buyerProfileSlice;
export const { reducer: buyerProfileReducer } = buyerProfileSlice;
