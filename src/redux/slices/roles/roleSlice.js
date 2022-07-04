import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import RolesServices from '../../../services/roles/index';
const initialState = {
  rolesIndex: {},
  permissions: [],
  status: null,
  created: null,
  destroy: null,
  update: null,
  showRole: {}
};
//guardar
export const saveRole = createAsyncThunk('saveRol', async (role) => {
  const { status } = await RolesServices.saveNewRole(role);
  return status;
});
//eliminar
export const destroyRole = createAsyncThunk('destroyRole', async (id) => {
  const { data } = await RolesServices.deleteById(id);
  return data;
});
//index
export const fetchRoles = createAsyncThunk('getRoleAll', async (value) => {
  const { data } = await RolesServices.getAllRole(value);
  return data;
});
//show edit
export const fetchShowRole = createAsyncThunk('fetchShowRole', async (id) => {
  const { data } = await RolesServices.showRole(id);
  return data;
});
//update
export const fetchUpdateRole = createAsyncThunk('updateRole', async (role) => {
  const { data } = await RolesServices.updateRole(role);
  return data;
});
//precargados
export const getRoleCreate = createAsyncThunk('getRoleCreate', async () => {
  const { data } = await RolesServices.getRoleCreate();
  return data;
});

const RoleSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //index
    builder.addCase(fetchRoles.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchRoles.fulfilled, (state, { payload }) => {
      state.rolesIndex = payload.roles;
      state.status = 'success';
    });
    builder.addCase(fetchRoles.rejected, (state, action) => {
      state.status = 'error';
    });
    //precargado
    builder.addCase(getRoleCreate.fulfilled, (state, { payload }) => {
      state.permissions = payload.permiso;
    });
    //guardar
    builder.addCase(saveRole.pending, (state, action) => {
      state.created = 'loading';
    });

    builder.addCase(saveRole.fulfilled, (state, { payload }) => {
      state.created = 'Rol creado satisfactoriamente';
    });

    builder.addCase(saveRole.rejected, (state, { payload }) => {
      state.created = 'Error al crear el rol';
    });
    //eliminar
    builder.addCase(destroyRole.fulfilled, (state, { payload }) => {
      state.destroy = 'Rol eliminado satisfactoriamente';
    });
    builder.addCase(destroyRole.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar el rol';
    });
    //show
    builder.addCase(fetchShowRole.fulfilled, (state, { payload }) => {
      state.showRole = payload;
    });
    //update
    builder.addCase(fetchUpdateRole.fulfilled, (state, { payload }) => {
      state.update = 'Rol actualizado satisfactoriamente';
    });
    builder.addCase(fetchUpdateRole.rejected, (state, { payload }) => {
      state.update = 'Error al actualizar el rol';
    });
  }
});

export default RoleSlice.reducer;
