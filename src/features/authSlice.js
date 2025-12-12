import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload ?? null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
    updateUser(state, action) {
      if (state.user) state.user = { ...state.user, ...action.payload };
    }
  }
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
