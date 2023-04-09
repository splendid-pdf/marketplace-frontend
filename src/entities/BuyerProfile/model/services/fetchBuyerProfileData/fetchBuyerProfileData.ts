import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BuyerProfile } from '../../buyerProfile.types';
import { axiosInstance } from 'shared/api/axiosInstance';
import { LS_KEY_BUYER_ACCESS_TOKEN } from 'shared/constants/localStorage';
import { buyerProfileActions } from '../../slice/buyerProfileSlice';

export const fetchBuyerProfileData = createAsyncThunk<
    BuyerProfile,
    string
>(
  'buyerProfile/fetchBuyerProfileData',
  
  async (externalId, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;
    try {
      const response = await axiosInstance.get<BuyerProfile>(`/users/${externalId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN)}`,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(buyerProfileActions.setProfile(response.data));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
