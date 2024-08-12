// src/slices/pinSlice.js

import { createSlice } from '@reduxjs/toolkit';

const pinSlice = createSlice({
  name: 'pin',
  initialState: {
    value: '',
    isAuthenticated: false,
  },
  reducers: {
    setPin: (state, action) => {
      state.value = action.payload;
      state.isAuthenticated = action.payload === '7890'; // Check authentication based on PIN
    },
  },
});

export const { setPin } = pinSlice.actions;
export default pinSlice.reducer;
