import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import suppliesServices from '../../../services/supplies/index';
const initialState = {
  articlesContainer: [],
  articlesContainerOut: [],
  selectedSupply: {},
  selectedSupplyOut: {},
  articlesSupplies: [],
  status: null,
  created: null
};

export const saveSupplies = createAsyncThunk('saveSupplie', async (supplie) => {
  const { status } = await suppliesServices.create(supplie);
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
    builder.addCase(fetchSuppliesCreate.fulfilled, (state, { payload }) => {
      state.selectedSupply = payload;
    });

    builder.addCase(fetchSuppliesCreateOut.fulfilled, (state, { payload }) => {
      state.selectedSupplyOut = payload;
    });

    builder.addCase(saveSupplies.pending, (state, action) => {
      state.created = 'loading';
    });
    builder.addCase(saveSupplies.fulfilled, (state, { payload }) => {
      state.created = 'Ingreso creado satisfactoriamente';
      alert('Ingreso creado satisfactoriamente');
    });
    builder.addCase(saveSupplies.rejected, (state, { payload }) => {
      state.created = 'Error al crear ingreso';
      alert('Error al crear ingreso');
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
  }
});

export const { addArticle, addArticleOut, resetArticles } =
  suppliesSlice.actions;
export default suppliesSlice.reducer;
