import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import articleServices from '../../../services/articles/index';
const initialState = {
  articlesIndex: {},
  categories: [],
  presentations: [],
  units: [],
  status: null,
  created: null,
  destroy: null,
  update: null,
  showArticle: {}
};

export const saveArticle = createAsyncThunk('saveArticle', async (article) => {
  const { status } = await articleServices.create(article);
  return status;
});

export const destroyArticle = createAsyncThunk('destroyArticle', async (id) => {
  const { data } = await articleServices.deleteById(id);
  return data;
});
export const fetchArticles = createAsyncThunk('getArticleAll', async (value) => {
  const { data } = await articleServices.getAll(value);
  return data;
});

export const fetchShowArticle = createAsyncThunk(
  'fetchShowArticle',
  async (id) => {
    const { data } = await articleServices.showArticle(id);
    return data;
  }
);

export const updateArticle = createAsyncThunk(
  'updateArticle',
  async (article) => {
    const { data } = await articleServices.updateArticle(article);
    return data;
  }
);

export const fetchArticlesCreate = createAsyncThunk(
  'getArticleCreate',
  async () => {
    const { data } = await articleServices.getArticulosCreate();
    return data;
  }
);

const articleSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(fetchArticles.fulfilled, (state, { payload }) => {
      state.articlesIndex = payload.articulos;
      state.status = 'success';
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.status = 'error';
    });
    builder.addCase(fetchArticlesCreate.fulfilled, (state, { payload }) => {
      state.categories = payload.categoria;
      state.presentations = payload.presentacion;
      state.units = payload.unid_med;
    });

    builder.addCase(saveArticle.pending, (state, action) => {
      state.created = 'loading';
    });

    builder.addCase(saveArticle.fulfilled, (state, { payload }) => {
      state.created = 'Articulo creado satisfactoriamente';
    });

    builder.addCase(saveArticle.rejected, (state, { payload }) => {
      state.created = 'Error al crear el articulo';
    });

    builder.addCase(destroyArticle.fulfilled, (state, { payload }) => {
      state.destroy = 'Articulo eliminado satisfactoriamente';
    });
    builder.addCase(destroyArticle.rejected, (state, { payload }) => {
      state.destroy = 'Error al eliminar el articulo';
    });

    builder.addCase(fetchShowArticle.fulfilled, (state, { payload }) => {
      state.showArticle = payload;
    });

    builder.addCase(updateArticle.fulfilled, (state, { payload }) => {
      state.update = 'Articulo actualizado satisfactoriamente';
    });
    builder.addCase(updateArticle.rejected, (state, { payload }) => {
      state.update = 'Error al actualizar el articulo';
    });
  }
});

export default articleSlice.reducer;
