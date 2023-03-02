import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBuyerProfileForm } from '../../selectors/getBuyerProfileForm';
import axios from 'axios';
import { 
  ApiBuyerSchema,
  BuyerProfile 
} from '../../buyerProfile.types';


export const updateBuyerProfileData = createAsyncThunk(
  'buyerProfile/updateBuyerProfileData',
  async (buyerData: ApiBuyerSchema, { rejectWithValue, dispatch }) => {
    const formData = getBuyerProfileForm;

    try {
      const response = await axios.put<BuyerProfile>(`/users/${buyerData.externalId}`, formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.error(e);
      return rejectWithValue({error: 'Server error'});
    }
  },
);
