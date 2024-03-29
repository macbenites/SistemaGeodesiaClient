import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import UsersServices from 'src/services/users';
const initialState = {
  index: {},
  indexDeleted: {},
  create: {},
  province: [],
  district: [],
  message: null,
  updateUser: {},
  profile: {},
  editPass: {},
  updatePass: {},
  showUser: {},
  assignRole: {},
  destroy: null,
  restore: null
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (searchText) => {
    const { data } = await UsersServices.indexEmployee(searchText);
    return data;
  }
);

export const fetchUsersDeleted = createAsyncThunk(
  'users/fetchUsersDeleted',
  async (searchText) => {
    const { data } = await UsersServices.indexEmployeeDeleted(searchText);
    return data;
  }
);

export const fetchUpdateUser = createAsyncThunk(
  'users/fetchUpdateUser',
  async (id) => {
    const { data } = await UsersServices.getUpdateEmployee(id);
    return data;
  }
);

export const fetchCreateEmployee = createAsyncThunk(
  'users/fetchCreateEmployee',
  async () => {
    const { data } = await UsersServices.createEmployee();
    return data;
  }
);

export const fetchProvince = createAsyncThunk(
  'users/fetchProvince',
  async (id) => {
    const { data } = await UsersServices.getProvince(id);
    return data;
  }
);

export const fetchDistrict = createAsyncThunk(
  'users/fetchDistrict',
  async (id) => {
    const { data } = await UsersServices.getDistrict(id);
    return data;
  }
);

export const saveEmployee = createAsyncThunk(
  'users/saveEmployee',
  async (employee) => {
    const postEmployee = {
      cod_t_per: employee.cod_t_per,
      nom_per: employee.nom_per,
      ape_pat_per: employee.ape_pat_per,
      ape_mat_per: employee.ape_mat_per,
      cod_t_doc: employee.cod_t_doc,
      nro_doc: employee.nro_doc,
      correo_per: employee.correo_per,
      dir_per: employee.dir_per,
      cod_dpt: employee.cod_dpt,
      cod_provi: employee.cod_provi,
      cod_dist: employee.cod_dist,
      dir_per: employee.dir_per,
      nro_telf: employee.telephones.map((telephone) => telephone.nro_telf)
    };

    const { data } = await UsersServices.saveEmployee(postEmployee);
    return data;
  }
);

export const updateEmployee = createAsyncThunk(
  'users/updateEmployee',
  async (employee) => {
    const putEmployee = {
      cod_persona: employee.cod_persona,
      cod_t_per: employee.cod_t_per,
      nom_per: employee.nom_per,
      ape_pat_per: employee.ape_pat_per,
      ape_mat_per: employee.ape_mat_per,
      cod_t_doc: employee.cod_t_doc,
      nro_doc: employee.nro_doc,
      correo_per: employee.correo_per,
      dir_per: employee.dir_per,
      cod_dpt: employee.cod_dpt,
      cod_provi: employee.cod_provi,
      cod_dist: employee.cod_dist,
      dir_per: employee.dir_per,
      nro_telf: employee.telephones.map((telephone) => telephone.nro_telf)
    };
    const { data } = await UsersServices.updateEmployee(putEmployee);
    return data;
  }
);

export const destroyEmployee = createAsyncThunk(
  'destroyEmployee',
  async (id) => {
    const { data } = await UsersServices.deleteById(id);
    return data;
  }
);

export const restoreEmployee = createAsyncThunk(
  'restoreEmployee',
  async (id) => {
    const { data } = await UsersServices.restoreById(id);
    return data;
  }
);

export const getProfile = createAsyncThunk('users/getProfile', async () => {
  const { data } = await UsersServices.showProfile();
  return data;
});
//cambiar contraseña
export const fetchEditPassword = createAsyncThunk(
  'users/fetchEditPassword',
  async (id) => {
    const { data } = await UsersServices.editPass(id);
    return data;
  }
);

export const updatePassword = createAsyncThunk(
  'users/updatePassword',
  async (passwordEdit) => {
    // alert(JSON.stringify(passwordEdit));
    const { data } = await UsersServices.updatePass(passwordEdit);
    return data;
  }
);

export const fetchShowEmployee = createAsyncThunk(
  'users/fetchShowEmployee',
  async (id) => {
    const { data } = await UsersServices.showEmployee(id);
    return data;
  }
);

export const fetchAssignRole = createAsyncThunk(
  'users/fetchAssignRole',
  async (id) => {
    const { data } = await UsersServices.getAssignRole(id);
    return data;
  }
);

export const saveAssignRole = createAsyncThunk(
  'users/assignRole',
  async (assignRole) => {
    const { data } = await UsersServices.saveAssignRole(assignRole);
    return data;
  }
);

const UserSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.index = payload;
    });
    builder.addCase(fetchUsersDeleted.fulfilled, (state, { payload }) => {
      state.indexDeleted = payload;
    });
    builder.addCase(fetchCreateEmployee.fulfilled, (state, { payload }) => {
      state.create = payload;
    });
    builder.addCase(fetchProvince.fulfilled, (state, { payload }) => {
      state.province = payload.provincias;
    });
    builder.addCase(fetchDistrict.fulfilled, (state, { payload }) => {
      state.district = payload.distritos;
    });
    builder.addCase(saveEmployee.fulfilled, (state, { payload }) => {
      state.message = payload.msg;
    });

    builder.addCase(fetchUpdateUser.fulfilled, (state, { payload }) => {
      state.updateUser = payload;
    });

    builder.addCase(updateEmployee.fulfilled, (state, { payload }) => {
      state.message = payload.msg;
    });

    builder.addCase(destroyEmployee.fulfilled, (state, { payload }) => {
      state.destroy = 'Trabajador eliminado satisfactoriamente';
    });
    builder.addCase(destroyEmployee.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar el trabajador';
    });

    builder.addCase(restoreEmployee.fulfilled, (state, { payload }) => {
      state.restore = 'Trabajador restaurado satisfactoriamente';
    });
    builder.addCase(restoreEmployee.rejected, (state, { payload }) => {
      state.restore = 'Error al restaurar el trabajador';
    });

    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });
    //edit
    builder.addCase(fetchEditPassword.fulfilled, (state, { payload }) => {
      state.editPass = payload;
    });
    //update
    builder.addCase(updatePassword.fulfilled, (state, { payload }) => {
      // state.updatePass = payload.id_recibid;
      state.updatePass = 'Contraseña actualizada satisfactoriamente';
    });

    builder.addCase(updatePassword.rejected, (state, { payload }) => {
      state.updatePass = 'Error al actualizar la contraseña';
    });

    builder.addCase(fetchShowEmployee.fulfilled, (state, { payload }) => {
      state.showUser = payload;
    });

    builder.addCase(fetchAssignRole.fulfilled, (state, { payload }) => {
      state.assignRole = payload;
    });

    builder.addCase(saveAssignRole.fulfilled, (state, { payload }) => {
      state.message = payload.status;
    });
  }
});

export default UserSlice.reducer;
