import { configureStore } from '@reduxjs/toolkit';
// import pinReducer from '../slices/pinSlice';
import pinReducer from '../slice/pinSlice.js';

export const store = configureStore({
  reducer: {
    pin: pinReducer,
  },
});