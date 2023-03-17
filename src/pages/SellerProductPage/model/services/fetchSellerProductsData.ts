import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PRODUCTS_SELLER_URL } from "shared/constants/productsSeller_url";

const SELLER_ID = "00b970fb-f78d-403a-a114-5e05b3e404f9";

export interface ParamsFetch {
  currentPage: number;
  limit: number;
}

export const fetchSellerProductsData = createAsyncThunk(
  "sellerProducts/fetchSellerProductaData",
  async (params: ParamsFetch, { rejectWithValue }) => {
    const { currentPage, limit } = params;

    try {
      const response: AxiosResponse = await axios.get(
        // eslint-disable-next-line max-len
        `${PRODUCTS_SELLER_URL}/${SELLER_ID}/products?method=PRODUCT_LIST&page=${currentPage}&size=${limit}&sort=price`,
      );
      console.log(response.data.content);

      if (!response.data) {
        throw new Error();
      }

      return response.data.content;
    } catch (e) {
      console.error(e);
      return rejectWithValue("Incorrect login or password");
    }
  },
);
