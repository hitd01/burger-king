import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollection } from '../../firebase/services';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return await getCollection('users');
});

export const getUserByUid = createAsyncThunk(
  'users/getUserByUid',
  async ({ condition }) => {
    return await getCollection('users', condition);
  }
);

const initialState = {
  users: [],
  loading: 'idle',
  // currentRequestId: undefined,
  // error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.loading = 'pending';
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = 'success';
      state.users = action.payload;
    },
    [getUsers.rejected]: (state) => {
      state.loading = 'failed';
    },
  },
});

// export const {  } = usersSlice.actions;

export default usersSlice.reducer;
