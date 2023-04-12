/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { 
  ApiBuyerSchema,
  BuyerProfile 
} from '../buyerProfile.types';
import { axiosInstance } from 'shared/api/axiosInstance';
import { LS_KEY_BUYER_ACCESS_TOKEN } from 'shared/constants/localStorage';
import { buyerAuthActions } from 'features/buyerAuth';


export const updateBuyerProfileData = createAsyncThunk(
  'buyerProfile/updateBuyerProfileData',
  async (buyerData: ApiBuyerSchema, { rejectWithValue, dispatch }) => {
    const data = buyerData.buyer;

    try {
      const response = 
        await axiosInstance.put<BuyerProfile>(`/users/${buyerData.externalId}`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem(LS_KEY_BUYER_ACCESS_TOKEN)}`,
          },
        });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error: any) {
      const statusCode = error.response.status;
      if (statusCode === 401) {
        dispatch(buyerAuthActions.logout());
      }
      return rejectWithValue(error.message);
    }
  },
);
