import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line max-len
import { registerBuyerReducer } from 'features/userRegister/buyerRegister/model/slices/registerBuyerSlice';

/**
 * @description Redux store
 */
export const store = configureStore({
  reducer: {
    buyer: registerBuyerReducer,
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

