import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './slices/articles/articleSlice';
import suppliesReducer from './slices/supplies/suppliesSlice';
import kardexReducer from './slices/kardex/kardexSlice';
import InventarioReducer from './slices/Inventario/InventarioSlice';
import configReducer from './slices/config/configSlice';
import providerReducer from './slices/providers/providerSlice'; //proveedor
import almacenReducer from './slices/almacenes/almacenSlice'; //almacen
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './slices/auth/authSlice';
export const store = configureStore({
  reducer: {
    articles: articleReducer,
    supplies: suppliesReducer,
    config: configReducer,
    kardex: kardexReducer,
    Inventario: InventarioReducer,
    provider: providerReducer,
    auth: authReducer,
    almacen: almacenReducer
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});

setupListeners(store.dispatch);
