//proveedor
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import companyServices from '../../../services/company/index';
const initialState = {
    editCompanyState:{},
    status: null,
    update: null,
    showCompanyState: {}
  };

  export const fetchShowCompany = createAsyncThunk(
    'fetchShowCompany',
    async () => {
      const { data } = await companyServices.showCompany();
      return data;
    }
  );

  export const fetchEditCompany = createAsyncThunk(
    'fetchEditCompany',
    async (id) => {
      const { data } = await companyServices.editCompany(id);
      return data;
    }
  );
  
  export const updateCompany = createAsyncThunk(
    'updateCompany',
    async (company) => {
      const { data } = await companyServices.updateCompany (company);
      return data;
    }
  );

  const companySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
      extraReducers: (builder) => {
      //edit
      builder.addCase(fetchEditCompany.fulfilled, (state, { payload }) => {
        state.editCompanyState = payload;
      });
      //update
      builder.addCase(updateCompany.fulfilled, (state, { payload }) => {
        state.update = 'Datos de empresa actualizado satisfactoriamente';
      });
      builder.addCase(updateCompany.rejected, (state, { payload }) => {
        state.update = 'Error al actualizar datos de la empresa';
      });
    //show
    builder.addCase(fetchShowCompany.fulfilled, (state, { payload }) => {
        state.showCompanyState = payload;
    });
  }
  });
  export default companySlice.reducer;