import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import suppliesServices from '../../../services/supplies/index';
const initialState = {
  articlesContainer: [],
  selectedSupply: {},
  status: null,
  created: null
};

export const saveSupplies = createAsyncThunk('saveSupplie', async (supplie) => {
  const { status } = await suppliesServices.create(supplie);
  return status;
});
export const fetchSuppliesCreate = createAsyncThunk(
  'getSuppliesCreate',
  async () => {
    const { data } = await suppliesServices.getSuppliesCreate();
    return data;
  }
);
const suppliesSlice = createSlice({
  name: 'supplies',
  initialState,
  reducers: {
    addArticle: (state, { payload }) => {
      state.articlesContainer.push(payload);
      console.log('payload', payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSuppliesCreate.fulfilled, (state, { payload }) => {
      state.selectedSupply = payload;
      console.log('Ingreso');
    });
    builder.addCase(saveSupplies.pending, (state, action) => {
      state.created = 'loading';
    });
    builder.addCase(saveSupplies.fulfilled, (state, { payload }) => {
      state.created = 'Ingreso creado satisfactoriamente';
      alert('Ingreso creado satisfactoriamente');
    });
    builder.addCase(saveSupplies.rejected, (state, { payload }) => {
      state.created = 'Error al crear ingreso';
      alert('Error al crear ingreso');
    });
  }
});

export const { addArticle } = suppliesSlice.actions;
export default suppliesSlice.reducer;
