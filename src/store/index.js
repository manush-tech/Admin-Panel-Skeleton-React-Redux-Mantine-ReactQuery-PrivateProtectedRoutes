import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['feedback'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }), //this was done to remove serializableCheck error
});

export const persistor = persistStore(store);
