import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../components/Header/headerSlice';
import loginReducer from '../components/Login/loginSlice';
import usersReducer from '../components/Profile/profileSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    login: loginReducer,
    users: usersReducer,
  },
});
