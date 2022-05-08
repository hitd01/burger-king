import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollection } from '../../firebase/services';

const initialState = {
  blogReviewLoading: 'idle',
  blogReviews: [
    {
      blogId: 'blog_id',
      uid: 'user_id',
      comments: [
        'Vậy! Làm sao để bạn có thể đặt mua những chiếc burger tôm cho mình và gia đình một cách nhanh chóng nhất, với mức giá phù hợp nhất?',
      ],
      createdAt: null,
      updatedAt: null,
    },
  ],
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
