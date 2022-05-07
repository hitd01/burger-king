import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  collapsed: false,
};

export const navbarAdminSlice = createSlice({
  name: 'admin-navbar',
  initialState,
  reducers: {
    toggleCollapsed: (state, action) => {
      state.collapsed = action.payload;
    },
  },
});

export const { toggleCollapsed } = navbarAdminSlice.actions;

export default navbarAdminSlice.reducer;
