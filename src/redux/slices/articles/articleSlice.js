import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import articleServices from '../../../services/articles/index';
const initialState = {
  articles: [],
  categories: [],
  presentations: [],
  units: [],
  status: null,
  created: null
};

export const saveArticle = createAsyncThunk('saveArticle', async (article) => {
  const { status } = await articleServices.create(article);
  return status;
});

export const fetchArticles = createAsyncThunk('getArticleAll', async () => {
  const { data } = await articleServices.getAll();
  return data;
});

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
      state.articles = payload;
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
  }
});

export default articleSlice.reducer;
