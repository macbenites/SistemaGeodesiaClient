import { createSlice } from '@reduxjs/toolkit';
import authServices from '../../../services/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {},
  loader: false,
  status: ''
};

export const authLogin = createAsyncThunk('authLogin', async (user) => {
  const response = await authServices.login(user);
  return response;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authLogin.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload.data;
    });
    builder.addCase(authLogin.rejected, (state, { payload }) => {
      state.isLoggedIn = false;
      state.status = 'Usuario o contraseña incorrectos';
      alert(state.status);
    });
  }
});

export default authSlice.reducer;
