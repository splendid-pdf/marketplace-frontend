import { configureStore } from '@reduxjs/toolkit';
import { registerBuyerReducer } from '../../features/RegisterUser/model/slices/registerBuyerSlice';

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