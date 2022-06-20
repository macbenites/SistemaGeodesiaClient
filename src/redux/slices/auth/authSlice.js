import { createSlice } from '@reduxjs/toolkit';
import authServices from '../../../services/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn')
    ? JSON.parse(localStorage.getItem('isLoggedIn'))
    : false,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  loader: false,
  status: ''
};

export const authLogin = createAsyncThunk('authLogin', async (user) => {
  const { data } = await authServices.login(user);
  return data;
});

export const authLogout = createAsyncThunk('authLogout', async (token) => {
  const response = await authServices.logout(token);
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
      if (payload.access_token) {
        localStorage.setItem('user', JSON.stringify(payload));
        localStorage.setItem('token', payload.access_token);
        localStorage.setItem('isLoggedIn', true);
      }
    });
    builder.addCase(authLogin.rejected, (state, { payload }) => {
      state.isLoggedIn = false;
      state.status = 'Usuario o contraseña incorrectos';
      alert(state.status);
    });
  }
});

export default authSlice.reducer;
