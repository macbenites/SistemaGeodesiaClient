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

export const authLogout = createAsyncThunk('authLogout', async (token) => {
  const response = await authServices.logout(token);
  return response;
});

const authMiddleware = (store) => (next) => (action) => {
  if (authActions.login.match(action)) {
    // Note: localStorage expects a string
    localStorage.setItem('isAuthenticated', 'true');
  } else if (authActions.logout.match(action)) {
    localStorage.setItem('isAuthenticated', 'false');
  }
  return next(action);
};

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
