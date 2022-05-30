//proveedor
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import providerServices from '../../../services/providers/index';
const initialState = {
    telephonesContainer:[],
    telephonesContainerOut:[],
    providersCreate:{},
    providers:[],
    tdoc_ide: [],
    departamento: [],
    provincia: [],
    distrito: [],
    tipo_persona: [],
    status: null,
    created: null
  };

  export const saveProvider = createAsyncThunk(
    'saveProvider',
    async (provider) => {
      const { status } = await providerServices.create(provider);
      return status;
  });

  export const fetchProviderProvince = createAsyncThunk(
    'fetchProviderProvince',
    async (id) => {
      const { data } = await providerServices.getProviderProvince(id);
      return data;
    }
  );
  export const fetchProviderDistrict = createAsyncThunk(
    'fetchProviderDistrict',
    async (id) => {
      const { data } = await providerServices.getProviderDistrict(id);
      return data;
    }
  );

  export const fetchProviders = createAsyncThunk(
    'getProviderAll', 
    async () => {
      const { data } = await providerServices.getAll();
      return data;
  });

  export const fetchProvidersCreate = createAsyncThunk(
    'getProviderCreate',
    async () => {
      const { data } = await providerServices.getProveedoresCreate();
      return data;
    }
  );

  const providerSlice = createSlice({
    name: 'providers',
    initialState,
    reducers: {
      addTelephone: (state, { payload }) => {
        state.telephonesContainer.push(payload);
      },
      addTelephoneOut: (state, { payload }) => {
        state.telephonesContainerOut.push(payload);
        console.log(payload);
      },
      resetTelephone: (state) => {
        state.telephonesContainer = [];
        state.telephonesContainerOut = [];
      }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchProviders.pending, (state, action) => {
        state.status = 'loading';
      });
      builder.addCase(fetchProviders.fulfilled, (state, { payload }) => {
        state.providers = payload;//providers
        state.status = 'success';
      });
      builder.addCase(fetchProviders.rejected, (state, action) => {
        state.status = 'error';
      });

      builder.addCase(fetchProvidersCreate.fulfilled, (state, { payload }) => {
        state.providersCreate = payload;
      });

      builder.addCase(fetchProviderProvince.fulfilled, (state, { payload }) => {
        state.provincia = payload.provincias;//provincia
      });

      builder.addCase(fetchProviderDistrict.fulfilled, (state, { payload }) => {
        state.distrito = payload.distritos;//distrito
      });
  
      builder.addCase(saveProvider.pending, (state, action) => {
        state.created = 'loading';
      });
      builder.addCase(saveProvider.fulfilled, (state, { payload }) => {
        state.created = 'Proveedor creado satisfactoriamente';//created
      });
      builder.addCase(saveProvider.rejected, (state, { payload }) => {
        state.created = 'Error al crear el proveedor';
      });
    }
  });
  export const { addTelephone, addTelephoneOut, resetTelephone } = providerSlice.actions;
  export default providerSlice.reducer;