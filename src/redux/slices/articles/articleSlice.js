import { createAsyncThunk } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import articleServices from '../../../services/articles/index';
const initialState = {
  articles: [],
  categories: [],
  states: [],
  presentations: [],
  unitMeasurements: [],
  status: null,
  created: null
};

export const saveArticle = createAsyncThunk('saveArticle', async (article) => {
  const response = await articleServices.create(article);
  return response;
});

export const fetchArticles = createAsyncThunk('getArticleAll', async () => {
  const { data } = await articleServices.getAll();
  return data;
});

export const fetchCategories = createAsyncThunk(
  'getArticleCategories',
  async () => {
    const { data } = await articleServices.getCategorias();
    return data;
  }
);

export const fetchState = createAsyncThunk('getArticleStates', async () => {
  const { data } = await articleServices.getStates();
  return data;
});

export const fetchPresentations = createAsyncThunk(
  'getArticlePresentations',
  async () => {
    const { data } = await articleServices.getPresentations();
    return data;
  }
);

export const fetchUnitMeasurement = createAsyncThunk(
  'getArticleUnitMeasurement',
  async () => {
    const { data } = await articleServices.getUnitMeasurement();
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
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.articles = action.payload;
      state.status = 'success';
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.status = 'error';
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(fetchState.fulfilled, (state, action) => {
      state.states = action.payload;
    });
    builder.addCase(fetchPresentations.fulfilled, (state, action) => {
      state.presentations = action.payload;
    });
    builder.addCase(fetchUnitMeasurement.fulfilled, (state, action) => {
      state.unitMeasurements = action.payload;
    });
    // builder.addCase(saveArticle.fulfilled, (state, action) => {
    //   state.created = 'Saved';
    // });
    // builder.addCase(saveArticle.error, (state, action) => {
    //   state.created = 'No saved';
    // });
  }
});

export default articleSlice.reducer;
