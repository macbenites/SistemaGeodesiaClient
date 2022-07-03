import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import suppliesServices from '../../../services/supplies/index';
const initialState = {
  articlesContainer: [],
  articlesContainerOut: [],
  selectedSupply: {},
  selectedSupplyOut: {},
  selectApplicantOut: {},
  selectAuthorizerOut: {},
  articlesSupplies: [],
  suppliesIndex: {}, //ingresos
  outputsIndex: {}, //salidas
  status: null,
  created: null,
  supplyIn: {},
  supplyOut: {},
  employe: {}
};

export const saveSupplies = createAsyncThunk('saveSupplie', async (supplie) => {
  const postSupplie = {
    cod_prov: supplie.cod_prov,
    cod_almacen: supplie.cod_almacen,
    cod_trabajador: supplie.cod_trabajador,
    cod_t_transf: supplie.cod_t_transf,
    cod_t_doc: supplie.cod_t_doc,
    nro_doc: supplie.nro_doc,
    fec_doc: supplie.fec_doc,
    cod_estado_reg: supplie.cod_estado_reg,
    tot_pagar: supplie.tot_pagar,
    cod_art: supplie.articles.map((article) => article.cod_art),
    prec_unit: supplie.articles.map((article) => article.prec_unit),
    cant_art: supplie.articles.map((article) => article.cant_art),
    prec_compr: supplie.articles.map((article) => article.prec_compr),
    obs_ing: supplie.articles.map((article) => article.obs_ing)
  };
  console.log(postSupplie);
  const { status } = await suppliesServices.create(postSupplie);
  return status;
});

export const saveSuppliesOut = createAsyncThunk(
  'saveSupplieOut',
  async (supplie) => {
    const postSupplie = {
      cod_solicitador: supplie.cod_solicitador,
      cod_autorizador: supplie.cod_autorizador,
      cod_almacen: supplie.cod_almacen,
      cod_t_transf: supplie.cod_t_transf,
      cod_t_doc: supplie.cod_t_doc,
      nro_doc: supplie.nro_doc,
      fec_doc: supplie.fec_doc,
      cod_art: supplie.articles.map((article) => article.cod_art),
      cant_art: supplie.articles.map((article) => article.cant_art),
      obs_sal: supplie.articles.map((article) => article.obs_sal)
    };
    const { data } = await suppliesServices.createOut(postSupplie);
    return data;
  }
);

export const fetchEmployee = createAsyncThunk('fetchEmployee', async (id) => {
  const { status, data } = await suppliesServices.getEmployee(id);
  return { status, data };
});

export const fetchSuppliesCreate = createAsyncThunk(
  'getSuppliesCreate',
  async () => {
    const { data } = await suppliesServices.getSuppliesCreate();
    return data;
  }
);

export const fetchSuppliesCreateOut = createAsyncThunk(
  'getSuppliesOut',
  async () => {
    const { data } = await suppliesServices.getSuppliesCreateOut();
    return data;
  }
);

export const fetchArticlesSupplies = createAsyncThunk(
  'getArticlesSupplies',
  async (id) => {
    const { data } = await suppliesServices.getArticlesSupplies(id);
    return data.articulos;
  }
);

//index ingreso
export const fetchAllSupplies = createAsyncThunk(
  'getSupliesAll',
  async (value) => {
    const { data } = await suppliesServices.getAllSupplies(value);
    return data;
  }
);
//index salida
export const fetchAllOutputs = createAsyncThunk(
  'getOutputsAll',
  async (value) => {
    const { data } = await suppliesServices.getAllOutputs(value);
    return data;
  }
);

export const fetchSupplyIn = createAsyncThunk('getSupplyIn', async (id) => {
  const { data } = await suppliesServices.getSuppliesById(id);
  return data;
});

export const fetchSupplyOut = createAsyncThunk('getSupplyOut', async (id) => {
  const { data } = await suppliesServices.getSuppliesOutById(id);
  return data;
});

export const fetchApplicantOut = createAsyncThunk(
  'getApplicantOut',
  async (id) => {
    const { data } = await suppliesServices.getApplicants(id);
    return data;
  }
);

export const fetchAuthorizerOut = createAsyncThunk(
  'getAuthorizerOut',
  async (id) => {
    const { data } = await suppliesServices.getAuthorizer(id);
    return data;
  }
);

const suppliesSlice = createSlice({
  name: 'supplies',
  initialState,
  reducers: {
    addArticle: (state, { payload }) => {
      state.articlesContainer.push(payload);
    },

    addArticleOut: (state, { payload }) => {
      state.articlesContainerOut.push(payload);
      console.log(payload);
    },
    resetArticles: (state) => {
      state.articlesContainer = [];
      state.articlesContainerOut = [];
    }
  },
  extraReducers: (builder) => {
    //index ingreso
    builder.addCase(fetchAllSupplies.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchAllSupplies.fulfilled, (state, { payload }) => {
      state.suppliesIndex = payload.registros; //nombre de la tabla registros
      state.status = 'success';
    });
    builder.addCase(fetchAllSupplies.rejected, (state, action) => {
      state.status = 'error';
    });

    builder.addCase(fetchSuppliesCreate.fulfilled, (state, { payload }) => {
      state.selectedSupply = payload;
    });

    builder.addCase(fetchSuppliesCreateOut.fulfilled, (state, { payload }) => {
      state.selectedSupplyOut = payload;
    });

    builder.addCase(saveSupplies.pending, (state, action) => {
      state.created = 'Cargando';
    });
    builder.addCase(saveSupplies.fulfilled, (state, { payload }) => {
      state.created = 'Ingreso creado satisfactoriamente';
    });
    builder.addCase(saveSupplies.rejected, (state, { payload }) => {
      state.created = 'Error al crear ingreso';
    });
    builder.addCase(fetchArticlesSupplies.fulfilled, (state, { payload }) => {
      state.articlesSupplies = payload;
    });
    builder.addCase(saveSuppliesOut.pending, (state, { payload }) => {
      state.created = 'loading';
    });
    builder.addCase(saveSuppliesOut.fulfilled, (state, { payload }) => {
      state.created = 'Salida creada satisfactoriamente';
    });
    builder.addCase(saveSuppliesOut.rejected, (state, { payload }) => {
      state.created = 'Error al crear Salida';
    });

    //show ingreso - salida
    builder.addCase(fetchSupplyIn.fulfilled, (state, { payload }) => {
      state.supplyIn = payload;
    });
    builder.addCase(fetchSupplyOut.fulfilled, (state, { payload }) => {
      state.supplyOut = payload;
    });

    //index salida
    builder.addCase(fetchAllOutputs.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchAllOutputs.fulfilled, (state, { payload }) => {
      state.outputsIndex = payload.registros; //nombre de la tabla registros
      state.status = 'success';
    });
    builder.addCase(fetchAllOutputs.rejected, (state, action) => {
      state.status = 'error';
    });

    builder.addCase(fetchEmployee.fulfilled, (state, { payload }) => {
      state.employe = payload.data;
    });

    //Registro de salida
    builder.addCase(fetchApplicantOut.fulfilled, (state, { payload }) => {
      state.selectApplicantOut = payload;
    });
    builder.addCase(fetchAuthorizerOut.fulfilled, (state, { payload }) => {
      state.selectAuthorizerOut = payload;
    });
  }
});

export const { addArticle, addArticleOut, resetArticles } =
  suppliesSlice.actions;
export default suppliesSlice.reducer;
