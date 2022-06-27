import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import suppliesServices from '../../../services/supplies/index';
const initialState = {
  articlesContainer: [],
  articlesContainerOut: [],
  selectedSupply: {},
  selectedSupplyOut: {},
  articlesSupplies: [],
  suppliesIndex:{},
  status: null,
  created: null,
  supplyIn:{}
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
    const { status } = await suppliesServices.createOut(supplie);
    return status;
  }
);

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

//index
export const fetchAllSupplies = createAsyncThunk(
  'getSupliesAll', 
  async () => {
    const { data } = await suppliesServices.getAllSupplies();
    return data;
});

export const fetchSupplyIn = createAsyncThunk(
  'getSupplyIn', 
  async (id) => {
    const { data } = await suppliesServices.getSuppliesById(id);
    return data;
});

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
    //index
    builder.addCase(fetchAllSupplies.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchAllSupplies.fulfilled, (state, { payload }) => {
      state.suppliesIndex = payload.registros;//nombre de la tabla registros
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
    builder.addCase(saveSuppliesOut.pending, (state, action) => {
      state.created = 'loading';
    });
    builder.addCase(saveSuppliesOut.fulfilled, (state, { payload }) => {
      state.created = 'Salida creada satisfactoriamente';
      alert('Salida creado satisfactoriamente');
    });
    builder.addCase(saveSuppliesOut.rejected, (state, { payload }) => {
      state.created = 'Error al crear Salida';
      alert('Error al crear salida');
    });

    builder.addCase(fetchSupplyIn.fulfilled, (state, { payload }) => {
      state.supplyIn = payload;
    });
  }
});

export const { addArticle, addArticleOut, resetArticles } =
  suppliesSlice.actions;
export default suppliesSlice.reducer;
