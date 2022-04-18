import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHiddenLogin: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleHiddenLogin: (state, action) => {
      state.isHiddenLogin = action.payload;
    },
  },
});

export default loginSlice.reducer;
