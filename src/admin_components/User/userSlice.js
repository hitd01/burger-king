import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  userLoading: false,
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {},
});

export default usersSlice.reducer;
