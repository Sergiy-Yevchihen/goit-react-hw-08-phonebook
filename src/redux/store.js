import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import { filterReducer } from './contacts/contactsSlice';
import { contactsApi } from './contacts/contactsApi';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  contactsApi.middleware,
];

const persistedAppReducer = persistReducer(authPersistConfig, authReducer);

const appReducer = combineReducers({
  filter: filterReducer,
  auth: persistedAppReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'auth/logout/fulfilled') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
