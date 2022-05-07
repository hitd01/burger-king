import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollection } from '../../firebase/services';

const initialState = {
  blogLoading: 'idle',
  blogs: [],
};

export const getBlogs = createAsyncThunk('blogs/getBlogs', async () => {
  return await getCollection('blogs');
});

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.blogLoading = 'pending';
    },
    [getBlogs.fulfilled]: (state, action) => {
      state.blogLoading = 'success';
      state.blogs = action.payload;
    },
    [getBlogs.rejected]: (state) => {
      state.blogLoading = 'failed';
    },
  },
});

export default blogsSlice.reducer;
