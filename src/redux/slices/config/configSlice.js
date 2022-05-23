import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import configServices from '../../../services/config/index';
const initialState = {
  status: null,
  createdCategory: null,
  createdUnit: null
};

export const saveCategory = createAsyncThunk(
  'saveCategory',
  async (category) => {
    const { status } = await configServices.createCategory(category);
    return status;
  }
);

export const saveUnit = createAsyncThunk(
  'saveUnit',
  async (unit) => {
    const { status } = await configServices.createUnit(unit);
    return status;
  }
);

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveCategory.fulfilled, (state, { payload }) => {
      state.createdCategory = 'Categoria creada satisfactoriamente';
    });
    builder.addCase(saveCategory.rejected, (state, { payload }) => {
      state.createdCategory = 'No se pudo crear la categoría';
    });
    builder.addCase(saveUnit.fulfilled, (state, { payload }) => {
      state.createdUnit = 'unidad de medida creada satisfactoriamente';
    });
    builder.addCase(saveUnit.rejected, (state, { payload }) => {
      state.createdUnit = 'No se pudo crear la unidad de medida';
    });
  }
});



export default configSlice.reducer;
