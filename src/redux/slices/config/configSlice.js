import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import configServices from '../../../services/config/index';
const initialState = {
  status: null,
  createdCategory: null,
  createdUnit: null,
  createdPresentation: null,
  createdTransferencia: null
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

export const savePresentacion = createAsyncThunk(
  'savePresentacion',
  async (presentation) => {
    const { status } = await configServices.createPresentacion(presentation);
    return status;
  }
);

export const saveDocumento = createAsyncThunk(
  'saveDocumento',
  async (documento) => {
    const { status } = await configServices.createDocumento(documento);
    return status;
  }
);

export const saveTransferencia = createAsyncThunk(
  'saveTransferencia',
  async (transferencia) => {
    const { status } = await configServices.createTransferencia(transferencia);
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
    builder.addCase(savePresentacion.fulfilled, (state, { payload }) => {
      state.createdPresentation = 'Presentacion creado satisfactoriamente';
    });
    builder.addCase(savePresentacion.rejected, (state, { payload }) => {
      state.createdPresentation = 'No se pudo crear la presentacion';
    });
    builder.addCase(saveTransferencia.fulfilled, (state, { payload }) => {
      state.createdTransferencia = 'Tranferencia realizada satisfactoriamente';
    });
    builder.addCase(saveTransferencia.rejected, (state, { payload }) => {
      state.createdTransferencia = 'No se pudo hacer la transferencia';
    });
  }
});



export default configSlice.reducer;
