import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const profileSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

// export const { } = profileSlice.actions;

export default profileSlice.reducer;
