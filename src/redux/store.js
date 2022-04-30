import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/Login/loginSlice';
import usersReducer from '../components/Profile/profileSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: usersReducer,
  },
});
