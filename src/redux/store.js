import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../components/Header/headerSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
  },
});
