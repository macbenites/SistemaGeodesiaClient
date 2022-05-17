import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './slices/articles/articleSlice';

export const store = configureStore({
  reducer: {
    articles: articleReducer
  }
});
