import { createSlice } from "@reduxjs/toolkit";
import { fetchSellerProductsData } from "../services/fetchSellerProductsData";

const initialState = {
  loading: false,
  data: [],
};

export const sellerProductsSlice = createSlice({
  name: "sellerProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProductsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSellerProductsData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchSellerProductsData.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { actions: sellerProductsActions } = sellerProductsSlice;
export const { reducer: sellerProductsReducer } = sellerProductsSlice;
