import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHiddenLogin: false,
  isLogged: false,
  providerId: null,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    toggleHiddenLogin: (state, action) => {
      state.isHiddenLogin = action.payload;
    },
    checkLogged: (state, action) => {
      state.isLogged = action.payload;
    },
    setProviderId: (state, action) => {
      state.providerId = action.payload;
    },
  },
});

export const { toggleHiddenLogin, checkLogged, setProviderId } =
  loginSlice.actions;

export default loginSlice.reducer;
