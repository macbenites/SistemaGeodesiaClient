import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import InventarioServices from '../../../services/Inventario/index';
const initialState = {
  almacen: [],
  InventarioReport: {}
};

export const fetchInventario = createAsyncThunk('fetchInventario', async () => {
  const { data } = await InventarioServices.getInventario();
  return data;
});

export const fetchInventarioReporte = createAsyncThunk(
  'fetchInventarioReporte',
  async (id) => {
    const { data } = await InventarioServices.getInventarioReporte(id);
    return data;
  }
);

const InventarioSlice = createSlice({
  name: 'Inventario',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchInventario.fulfilled, (state, { payload }) => {
      state.almacen = payload.almacen;
    });
    builder.addCase(fetchInventarioReporte.fulfilled, (state, { payload }) => {
      alert('Reporte generado');
      state.InventarioReport = payload;
    });
  }
});

export default InventarioSlice.reducer;
