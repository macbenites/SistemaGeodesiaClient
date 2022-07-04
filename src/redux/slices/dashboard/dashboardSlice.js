import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import DashboardServices from 'src/services/dashboard';
const initialState = {
  status: null,
  created: null,
  destroy: null,
  update: null,
  userDashboard: {},
  wareHouse: {},
  articlesOut: {},
  articlesIn: {}
};
//guardar
export const fetchUsersLogged = createAsyncThunk('fetchUser', async () => {
  const { data } = await DashboardServices.getUserLogged();
  return data;
});

export const fetchWareHouse = createAsyncThunk('fetchWareHouse', async () => {
  const { data } = await DashboardServices.getWareHouse();
  return data;
});

export const fetchArticlesInput = createAsyncThunk(
  'fetchArticlesInput',
  async () => {
    const { data } = await DashboardServices.getArticlesInput('1');
    return data;
  }
);

export const fetchOutputArticles = createAsyncThunk(
  'fetchOutputArticles',
  async (id) => {
    const { data } = await DashboardServices.getOutputArticles(id);
    return data;
  }
);

const DashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //index
    builder.addCase(fetchUsersLogged.fulfilled, (state, { payload }) => {
      state.userDashboard = payload;
    });

    builder.addCase(fetchWareHouse.fulfilled, (state, { payload }) => {
      state.wareHouse = payload;
    });

    builder.addCase(fetchArticlesInput.fulfilled, (state, { payload }) => {
      state.articlesIn = payload;
    });

    builder.addCase(fetchOutputArticles.fulfilled, (state, { payload }) => {
      state.articlesOut = payload;
    });
  }
});

export default DashboardSlice.reducer;
