import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalClick: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
});

export default loginSlice.reducer;
