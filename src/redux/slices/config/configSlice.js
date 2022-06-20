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
  CategoryIndex:{},
  unitIndex:{},
  transferenciaIndex:{},
  documentoIndex:{},
  showPresentacion:{},
  showCategory:{},
  showUnit:{},
  showDocumento:{},
  showTransferencia:{},
  createdPresentation: null,
  createdTransferencia: null,
  createdDocumento:null
};
//******************* categoria ***********************
export const saveCategory = createAsyncThunk(
  'saveCategory',
  async (category) => {
    const { status } = await configServices.createCategory(category);
    return status;
  }
);
//index
export const fetchCategories = createAsyncThunk(
  'getAllCategory', async () => {
  const { data } = await configServices.getAllCategory();
  return data;
});
//show
export const fetchShowCategory = createAsyncThunk(
  'fetchShowCategory',
  async (id) => {
    const { data } = await configServices.showCategory(id);
    return data;
  }
);
//update
export const updateCategory = createAsyncThunk(
  'updateCategory',
  async (category) => {
    const { data } = await configServices.updateCategory(category);
    return data;
  }
);
//delete
export const destroyCategory = createAsyncThunk(
  'destroyCategory', async (id) => {
  const { data } = await configServices.deleteCategory(id);
  return data;
});
//******************* unidad de medida ***********************
export const saveUnit = createAsyncThunk(
  'saveUnit',
  async (unit) => {
    const { status } = await configServices.createUnit(unit);
    return status;
  }
);
//index
export const fetchUnits = createAsyncThunk(
  'getAllUnit', async () => {
  const { data } = await configServices.getAllUnit();
  return data;
});
//show
export const fetchShowUnit = createAsyncThunk(
  'fetchShowUnit',
  async (id) => {
    const { data } = await configServices.showUnit(id);
    return data;
  }
);
//update
export const updateUnit = createAsyncThunk(
  'updateUnit',
  async (unit) => {
    const { data } = await configServices.updateUnit(unit);
    return data;
  }
);
//delete
export const destroyUnit = createAsyncThunk(
  'destroyUnit', async (id) => {
  const { data } = await configServices.deleteUnit(id);
  return data;
});
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
//index
export const fetchDocumentos = createAsyncThunk('getAllDocumento', async () => {
  const { data } = await configServices.getAllDocumento();
  return data;
});
//show
export const fetchShowDocumento = createAsyncThunk(
  'fetchShowDocumento',
  async (id) => {
    const { data } = await configServices.showDocumento(id);
    return data;
  }
);
//update
export const updateDocumento = createAsyncThunk(
  'updateDocumento',
  async (documento) => {
    const { data } = await configServices.updateDocumento(documento);
    return data;
  }
);
//delete
export const destroyDocumento = createAsyncThunk(
  'destroyDocumento', async (id) => {
  const { data } = await configServices.deleteDocumento(id);
  return data;
});
//******************* tipo transferencia ***********************
export const saveTransferencia = createAsyncThunk(
  'saveTransferencia',
  async (transferencia) => {
    const { status } = await configServices.createTransferencia(transferencia);
    return status;
  }
);
//index
export const fetchTransferencias = createAsyncThunk(
  'getAllTransferencia', async () => {
  const { data } = await configServices.getAllTransferencia();
  return data;
});
//show
export const fetchShowTransferencia = createAsyncThunk(
  'fetchShowTransferencia',
  async (id) => {
    const { data } = await configServices.showTransferencia(id);
    return data;
  }
);
//update
export const updateTransferencia= createAsyncThunk(
  'updateTransferencia',
  async (transferencia) => {
    const { data } = await configServices.updateTransferencia(transferencia);
    return data;
  }
);
//delete
export const destroyTransferencia= createAsyncThunk('destroyTransferencia', async (id) => {
  const { data } = await configServices.deleteTransferencia(id);
  return data;
});

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //******************* categoria ***********************
    //index
    builder.addCase(fetchCategories.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCategories.fulfilled, (state, { payload }) => {
      state.CategoryIndex = payload.categorias;
      state.status = 'success';
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.status = 'error';
    });
    //guardar 
    builder.addCase(saveCategory.fulfilled, (state, { payload }) => {
      state.createdCategory = 'Categoria creada satisfactoriamente';
    });
    builder.addCase(saveCategory.rejected, (state, { payload }) => {
      state.createdCategory = 'No se pudo crear la categoría';
    });
    //show
    builder.addCase(fetchShowCategory.fulfilled, (state, { payload }) => {
      state.showCategory = payload;
    });
    //update
    builder.addCase(updateCategory.fulfilled, (state, { payload }) => {
      state.updated = 'Categoria actualizada satisfactoriamente';
    });
    builder.addCase(updateCategory.rejected, (state, { payload }) => {
      state.updated = 'Error al actualizar la categoria';
    });
    //delete
    builder.addCase(destroyCategory.fulfilled, (state, { payload }) => {
      state.destroy = 'Categoria eliminada satisfactoriamente';
    });
    builder.addCase(destroyCategory.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar la categoria';
    });
    //******************* unidad de medida ***********************
    //index
    builder.addCase(fetchUnits.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchUnits.fulfilled, (state, { payload }) => {
      state.unitIndex = payload.unid_med;
      state.status = 'success';
    });
    builder.addCase(fetchUnits.rejected, (state, action) => {
      state.status = 'error';
    });
    //guardar 
    builder.addCase(saveUnit.fulfilled, (state, { payload }) => {
      state.createdUnit = 'Unidad de medida creada satisfactoriamente';
    });
    builder.addCase(saveUnit.rejected, (state, { payload }) => {
      state.createdUnit = 'No se pudo crear la unidad de medida';
    });
    //show
    builder.addCase(fetchShowUnit.fulfilled, (state, { payload }) => {
      state.showUnit = payload;
    });
    //update
    builder.addCase(updateUnit.fulfilled, (state, { payload }) => {
      state.updated = 'Unidad de medida actualizada satisfactoriamente';
    });
    builder.addCase(updateUnit.rejected, (state, { payload }) => {
      state.updated = 'Error al actualizar la unidad de medida';
    });
    //delete
    builder.addCase(destroyUnit.fulfilled, (state, { payload }) => {
      state.destroy = 'Unidad de medida eliminado satisfactoriamente';
    });
    builder.addCase(destroyUnit.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar la unidad de medida';
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
    //index
    builder.addCase(fetchTransferencias.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchTransferencias.fulfilled, (state, { payload }) => {
      state.transferenciaIndex = payload.tipo_transf;
      state.status = 'success';
    });
    builder.addCase(fetchTransferencias.rejected, (state, action) => {
      state.status = 'error';
    });
    //guardar 
    builder.addCase(saveTransferencia.fulfilled, (state, { payload }) => {
      state.createdTransferencia = 'Tranferencia realizada satisfactoriamente';
    });
    builder.addCase(saveTransferencia.rejected, (state, { payload }) => {
      state.createdTransferencia = 'No se pudo hacer la transferencia';
    });
    //show
    builder.addCase(fetchShowTransferencia.fulfilled, (state, { payload }) => {
      state.showTransferencia = payload;
    });
    //update
    builder.addCase(updateTransferencia.fulfilled, (state, { payload }) => {
      state.updated = 'Tipo de transferencia actualizado satisfactoriamente';
    });
    builder.addCase(updateTransferencia.rejected, (state, { payload }) => {
      state.updated = 'Error al actualizar el tipo de transferencia';
    });
    //delete
    builder.addCase(destroyTransferencia.fulfilled, (state, { payload }) => {
      state.destroy = 'Tipo de transferencia eliminada satisfactoriamente';
    });
    builder.addCase(destroyTransferencia.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar el tipo de transferencia';
    });
    //******************* tipo documento ***********************
    //index
    builder.addCase(fetchDocumentos.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchDocumentos.fulfilled, (state, { payload }) => {
      state.documentoIndex = payload.tipo_doc_reg;
      state.status = 'success';
    });
    builder.addCase(fetchDocumentos.rejected, (state, action) => {
      state.status = 'error';
    });
    //guardar 
    builder.addCase(saveDocumento.fulfilled, (state, { payload }) => {
      state.createdDocumento = 'Tipo de documento creado satisfactoriamente';
    });
    builder.addCase(saveDocumento.rejected, (state, { payload }) => {
      state.createdDocumento = 'No se pudo registrar el tipo de documento';
    });
    //show
    builder.addCase(fetchShowDocumento.fulfilled, (state, { payload }) => {
      state.showDocumento = payload;
    });
    //update
    builder.addCase(updateDocumento.fulfilled, (state, { payload }) => {
      state.updated = 'Tipo de documento actualizado satisfactoriamente';
    });
    builder.addCase(updateDocumento.rejected, (state, { payload }) => {
      state.updated = 'Error al actualizar el tipo de documento';
    });
    //delete
    builder.addCase(destroyDocumento.fulfilled, (state, { payload }) => {
      state.destroy = 'Tipo de documento eliminado satisfactoriamente';
    });
    builder.addCase(destroyDocumento.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar el tipo de documento';
    });
  }
});



export default configSlice.reducer;
