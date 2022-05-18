import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './slices/articles/articleSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
});

export const store = configureStore({
  reducer: {
    articles: articleReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
});
