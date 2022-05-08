import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCollection } from '../../firebase/services';

const initialState = {
  productReviewLoading: 'idle',
  productReviews: [
    {
      userId: '0XZgnXYdfyiieQeF9QNGA4BVGXQ3',
      productId: 'UkliQmFoWQrr6zm6FkjR',
      rating: 0,
      comments: ['great', 'wow'],
      createdAt: null,
      updatedAt: null,
    },
  ],
};

export const getProductReviews = createAsyncThunk(
  'product-reviews/getProductReviews',
  async () => {
    return await getCollection('productReviews');
  }
);

export const productReviewsSlice = createSlice({
  name: 'product-reviews',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductReviews.pending]: (state) => {
      state.productReviewLoading = 'pending';
    },
    [getProductReviews.fulfilled]: (state, action) => {
      state.productReviewLoading = 'success';
      state.products = action.payload;
    },
    [getProductReviews.rejected]: (state) => {
      state.productReviewLoading = 'failed';
    },
  },
});

export default productReviewsSlice.reducer;
