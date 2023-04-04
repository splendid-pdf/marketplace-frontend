import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { buyerAuthReducer } from "../../features/buyerAuth";
import { sellerProductsReducer } from "pages/SellerProductPage/model/slice/sellerProductsSlice";
import { buyerProfileReducer } from '../../entities/BuyerProfile';

/**
 * @description Redux store
 */
export const store = configureStore({
  reducer: {
    buyerAuth: buyerAuthReducer,
    buyerProfile: buyerProfileReducer,
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
