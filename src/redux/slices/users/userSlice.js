import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import UsersServices from 'src/services/users';
const initialState = {
  index: {},
  create: {},
  province: [],
  district: [],
  message: '',
  updateUser: {},
  profile: {}
};

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (searchText) => {
    const { data } = await UsersServices.indexEmployee(searchText);
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
    const { data } = await UsersServices.saveEmployee(employee);
    return data;
  }
);

export const updateEmployee = createAsyncThunk(
  'users/updateEmployee',
  async (employee) => {
    const { data } = await UsersServices.updateEmployee(employee);
    return data;
  }
);

export const getProfile = createAsyncThunk(
  'users/getProfile',
  async () => {
    const { data } = await UsersServices.showProfile();
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

    builder.addCase(getProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });
  }
});

export default UserSlice.reducer;
