import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from '../components/navbar/navbarSlice';

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
  },
});
