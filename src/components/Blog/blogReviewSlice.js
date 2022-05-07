import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollection } from '../../firebase/services';

const initialState = {
  blogReviewLoading: 'idle',
  blogReviews: [],
};

export const getBlogReviews = createAsyncThunk(
  'blog-reviews/getBlogReviews',
  async () => {
    return await getCollection('blogReviews');
  }
);

export const blogReviewsSlice = createSlice({
  name: 'blog-reviews',
  initialState,
  reducers: {},
  extraReducers: {
    [getBlogReviews.pending]: (state) => {
      state.blogReviewLoading = 'pending';
    },
    [getBlogReviews.fulfilled]: (state, action) => {
      state.blogReviewLoading = 'success';
      state.blogs = action.payload;
    },
    [getBlogReviews.rejected]: (state) => {
      state.blogReviewLoading = 'failed';
    },
  },
});

export default blogReviewsSlice.reducer;
