import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import almacenesServices from '../../../services/almacenes/index';
const initialState = {
    status: null,
    updated: null,
    destroy: null,
    restore: null,
    almacenIndex:{},
    almacenIndexDeleted:{},
    showAlmacen:{},
    createdAlmacen: null,
};
export const saveAlmacen = createAsyncThunk('saveAlmacen', async (warehouse) => {
  const { status } = await almacenesServices.create(warehouse);
  return status;
});

export const destroyAlmacen = createAsyncThunk('destroyAlmacen', async (id) => {
  const { data } = await almacenesServices.deleteById(id);
  return data;
});

export const restoreAlmacen = createAsyncThunk('restoreAlmacen', async (id) => {
  const { data } = await almacenesServices.restoreById(id);
  return data;
});

export const fetchAlmacenes = createAsyncThunk(
  'getAlmacenAll', 
  async (value) => {
  const { data } = await almacenesServices.getAll(value);
  return data;
});

export const fetchAlmacenesDeleted = createAsyncThunk(
  'getAlmacenAllDeleted', 
  async (value) => {
  const { data } = await almacenesServices.getAllDeleted(value);
  return data;
});

export const fetchShowAlmacen = createAsyncThunk(
  'fetchShowAlmacen',
  async (id) => {
    const { data } = await almacenesServices.showAlmacen(id);
    return data;
  }
);

export const updateAlmacen = createAsyncThunk(
  'updateAlmacen',
  async (warehouse) => {
    const { data } = await almacenesServices.updateAlmacen(warehouse);
    return data;
  }
);

const almacenSlice = createSlice({
    name: 'almacenes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      //index
      builder.addCase(fetchAlmacenes.pending, (state, action) => {
        state.status = 'loading';
      });
      builder.addCase(fetchAlmacenes.fulfilled, (state, { payload }) => {
        state.almacenIndex = payload.almacenes;
        state.status = 'success';
      });
      builder.addCase(fetchAlmacenes.rejected, (state, action) => {
        state.status = 'error';
      });

      //index Deletes
      builder.addCase(fetchAlmacenesDeleted.pending, (state, action) => {
        state.status = 'loading';
      });
      builder.addCase(fetchAlmacenesDeleted.fulfilled, (state, { payload }) => {
        state.almacenIndexDeleted = payload.almacenes;
        state.status = 'success';
      });
      builder.addCase(fetchAlmacenesDeleted.rejected, (state, action) => {
        state.status = 'error';
      });

      //guardar
      builder.addCase(saveAlmacen.pending, (state, action) => {
        state.createdAlmacen = 'loading';
      });
  
      builder.addCase(saveAlmacen.fulfilled, (state, { payload }) => {
        state.createdAlmacen = 'Almacen creado satisfactoriamente';
      });
  
      builder.addCase(saveAlmacen.rejected, (state, { payload }) => {
        state.createdAlmacen = 'Error al crear el almacen';
      });
      //delete
      builder.addCase(destroyAlmacen.fulfilled, (state, { payload }) => {
        state.destroy = 'Almacen eliminado satisfactoriamente';
      });
      builder.addCase(destroyAlmacen.rejected, (state, { payload }) => {
        state.destroy = 'Error al eliminar el almacen';
      });
      //restore
      builder.addCase(restoreAlmacen.fulfilled, (state, { payload }) => {
        state.restore = 'Almacen restaurado satisfactoriamente';
      });
      builder.addCase(restoreAlmacen.rejected, (state, { payload }) => {
        state.restore = 'Error al restaurar el almacen';
      });
      //show
      builder.addCase(fetchShowAlmacen.fulfilled, (state, { payload }) => {
        state.showAlmacen = payload;
      });
      //update
      builder.addCase(updateAlmacen.fulfilled, (state, { payload }) => {
        state.updated = 'Almacen actualizado satisfactoriamente';
      });
      builder.addCase(updateAlmacen.rejected, (state, { payload }) => {
        state.updated = 'Error al actualizar el almacen';
      });
    }
  });
  
  export default almacenSlice.reducer;
  