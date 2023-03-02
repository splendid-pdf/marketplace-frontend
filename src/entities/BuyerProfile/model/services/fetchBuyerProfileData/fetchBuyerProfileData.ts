import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BuyerProfile } from '../../buyerProfile.types';

export const fetchBuyerProfileData = createAsyncThunk<
    BuyerProfile,
    string
>(
  'profile/fetchProfileData',
  async (externalId, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const response = await axios.get<BuyerProfile>(`/users/${externalId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue('Incorrect login or password');
    }
  },
);
