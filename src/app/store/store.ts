import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { buyerAuthReducer } from "../../features/buyerAuth";
import { sellerProductsReducer } from "pages/SellerProductPage/model/slice/sellerProductsSlice";

/**
 * @description Redux store
 */
export const store = configureStore({
  reducer: {
    buyerAuth: buyerAuthReducer,
    sellerProducts: sellerProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
