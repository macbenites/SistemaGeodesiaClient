import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import kardexServices from '../../../services/kardex/index';
const initialState = {
  almacen: [],
  articulo: []
};

export const fetchKardex = createAsyncThunk('fetchKardex', async () => {
  const { data } = await kardexServices.getKardex();
  return data;
});

export const fetchKardexArticle = createAsyncThunk(
  'fetchKardexArticle',
  async (id) => {
    const { data } = await kardexServices.getKardexArticle(id);
    return data;
  }
);

export const postKardex = createAsyncThunk('postKardex', async (kardex) => {
  const { status } = await kardexServices.postKardex(kardex);
  return status;
});

const kardexSlice = createSlice({
  name: 'kardex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchKardex.fulfilled, (state, { payload }) => {
      state.almacen = payload.almacen;
    });
    builder.addCase(fetchKardexArticle.fulfilled, (state, { payload }) => {
      state.articulo = payload.articulo;
      alert('Articulo cargado');
    });
  }
});

export default kardexSlice.reducer;
