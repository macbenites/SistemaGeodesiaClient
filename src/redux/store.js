import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './slices/articles/articleSlice';
import suppliesReducer from './slices/supplies/suppliesSlice';
import configReducer from './slices/config/configSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    articles: articleReducer,
    supplies: suppliesReducer,
    config: configReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

setupListeners(store.dispatch);
