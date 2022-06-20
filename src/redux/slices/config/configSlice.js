import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import configServices from '../../../services/config/index';
const initialState = {
  status: null,
  updated: null,
  destroy: null,
  createdCategory: null,
  createdUnit: null,
  presentationIndex:{},
  showPresentacion:{},
  createdPresentation: null,
  createdTransferencia: null,
  createdDocumento:null
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
//******************* presentacion ***********************
//guardar
export const savePresentacion = createAsyncThunk(
  'savePresentacion',
  async (presentation) => {
    const { status } = await configServices.createPresentacion(presentation);
    return status;
  }
);
//index
export const fetchPresentaciones = createAsyncThunk('getAllPresentacion', async () => {
  const { data } = await configServices.getAllPresentacion();
  return data;
});
//show
export const fetchShowPresentacion = createAsyncThunk(
  'fetchShowArticle',
  async (id) => {
    const { data } = await configServices.showPresentacion(id);
    return data;
  }
);
//update
export const updatePresentacion = createAsyncThunk(
  'updatePresentacion',
  async (presentation) => {
    const { data } = await configServices.updatePresentacion(presentation);
    return data;
  }
);
//delete
export const destroyPresentacion = createAsyncThunk('destroyPresentacion', async (id) => {
  const { data } = await configServices.deletePresentacion(id);
  return data;
});
//******************* tipo documento ***********************
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
    //******************* presentacion ***********************
    //index
    builder.addCase(fetchPresentaciones.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPresentaciones.fulfilled, (state, { payload }) => {
      state.presentationIndex = payload.presentaciones;
      state.status = 'success';
    });
    builder.addCase(fetchPresentaciones.rejected, (state, action) => {
      state.status = 'error';
    });
    //guardar 
    builder.addCase(savePresentacion.fulfilled, (state, { payload }) => {
      state.createdPresentation = 'Presentacion creado satisfactoriamente';
    });
    builder.addCase(savePresentacion.rejected, (state, { payload }) => {
      state.createdPresentation = 'No se pudo crear la presentacion';
    });
    //show
    builder.addCase(fetchShowPresentacion.fulfilled, (state, { payload }) => {
      state.showPresentacion = payload;
    });
    //update
    builder.addCase(updatePresentacion.fulfilled, (state, { payload }) => {
      state.updated = 'Presentacion actualizado satisfactoriamente';
    });
    builder.addCase(updatePresentacion.rejected, (state, { payload }) => {
      state.updated = 'Error al actualizar la presentacion';
    });
    //delete
    builder.addCase(destroyPresentacion.fulfilled, (state, { payload }) => {
      state.destroy = 'Presentacion eliminado satisfactoriamente';
    });
    builder.addCase(destroyPresentacion.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar la presentacion';
    });
//******************* tipo de transferencia ***********************
    builder.addCase(saveTransferencia.fulfilled, (state, { payload }) => {
      state.createdTransferencia = 'Tranferencia realizada satisfactoriamente';
    });
    builder.addCase(saveTransferencia.rejected, (state, { payload }) => {
      state.createdTransferencia = 'No se pudo hacer la transferencia';
    });
    builder.addCase(saveDocumento.fulfilled, (state, { payload }) => {
      state.createdDocumento = 'Tipo de documento creado satisfactoriamente';
    });
    builder.addCase(saveDocumento.rejected, (state, { payload }) => {
      state.createdDocumento = 'No se pudo registrar el tipo de documento';
    });
  }
});



export default configSlice.reducer;
