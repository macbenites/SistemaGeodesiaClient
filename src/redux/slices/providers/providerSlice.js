//proveedor
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import providerServices from '../../../services/providers/index';
const initialState = {
  telephonesContainer: [],
  telephonesContainerOut: [],
  providersCreate: {},
  providersIndex: {},
  tdoc_ide: [],
  departamento: [],
  provincia: [],
  distrito: [],
  tipo_persona: [],
  status: null,
  created: null,
  destroy: null,
  msgUpdate: '',
  updateProv: {},
  verProveedor: {}
};

export const saveProvider = createAsyncThunk(
  'saveProvider',
  async (provider) => {
    const postProvider = {
      cod_persona: provider.cod_persona,
      cod_t_per: provider.cod_t_per,
      razon_social: provider.razon_social,
      cod_t_doc: provider.cod_t_doc,
      nro_doc: provider.nro_doc,
      correo_per: provider.correo_per,
      cod_dist: provider.cod_dist,
      dir_per: provider.dir_per,
      nro_telf: provider.telephones.map((telephone) => telephone.nro_telf)
    };
    const { status } = await providerServices.create(postProvider);
    return status;
  }
);

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
  async (value) => {
    const { data } = await providerServices.getAll(value);
    return data;
  }
);

export const fetchProvidersCreate = createAsyncThunk(
  'getProviderCreate',
  async () => {
    const { data } = await providerServices.getProveedoresCreate();
    return data;
  }
);

export const fetchShowProvider = createAsyncThunk(
  'fetchShowProvider',
  async (id) => {
    const { data } = await providerServices.showProvider(id);
    return data;
  }
);

export const saveUpdateProvider = createAsyncThunk(
  'updateProvider',
  async (provider) => {
    const putProvider = {
      cod_prov: provider.cod_prov,
      cod_t_per: provider.cod_t_per,
      razon_social: provider.razon_social,
      cod_t_doc: provider.cod_t_doc,
      nro_doc: provider.nro_doc,
      correo_per: provider.correo_per,
      cod_dist: provider.cod_dist,
      cod_dpt: provider.cod_dpt,
      cod_provi: provider.cod_provi,
      dir_per: provider.dir_per,
      nro_telf: provider.telephones.map((telephone) => telephone.nro_telf)
    };
    const { data } = await providerServices.updateProvider(putProvider);
    return data;
  }
);

export const destroyProvider = createAsyncThunk(
  'destroyProvider',
  async (id) => {
    const { data } = await providerServices.deleteById(id);
    return data;
  }
);

export const fetchProviderShow = createAsyncThunk(
  'getProviderShow',
  async (id) => {
    const { data } = await providerServices.getProveedor(id);
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
    //index
    builder.addCase(fetchProviders.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchProviders.fulfilled, (state, { payload }) => {
      state.providersIndex = payload.proveedor; //nombre de la tabla
      state.status = 'success';
    });
    builder.addCase(fetchProviders.rejected, (state, action) => {
      state.status = 'error';
    });
    //show
    builder.addCase(fetchShowProvider.fulfilled, (state, { payload }) => {
      state.updateProv = payload;
    });
    //precargados
    builder.addCase(fetchProvidersCreate.fulfilled, (state, { payload }) => {
      state.providersCreate = payload;
    });

    builder.addCase(fetchProviderProvince.fulfilled, (state, { payload }) => {
      state.provincia = payload.provincias; //provincia
    });

    builder.addCase(fetchProviderDistrict.fulfilled, (state, { payload }) => {
      state.distrito = payload.distritos; //distrito
    });
    //guardar
    builder.addCase(saveProvider.pending, (state, action) => {
      state.created = 'loading';
    });
    builder.addCase(saveProvider.fulfilled, (state, { payload }) => {
      state.created = 'Proveedor creado satisfactoriamente'; //created
    });
    builder.addCase(saveProvider.rejected, (state, { payload }) => {
      state.created = 'Error al crear el proveedor';
    });
    //eliminar
    builder.addCase(destroyProvider.fulfilled, (state, { payload }) => {
      state.destroy = 'Proveedor eliminado satisfactoriamente';
    });
    builder.addCase(destroyProvider.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar el proveedor';
    });
    //update
    builder.addCase(saveUpdateProvider.fulfilled, (state, { payload }) => {
      state.msgUpdate = 'Proveedor actualizado satisfactoriamente';
    });
    // VER SHOW
    builder.addCase(fetchProviderShow.fulfilled, (state, { payload }) => {
      state.verProveedor = payload;
    });
  }
});
export const { addTelephone, addTelephoneOut, resetTelephone } =
  providerSlice.actions;
export default providerSlice.reducer;
