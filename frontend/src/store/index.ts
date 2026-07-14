import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user.reducer';
import { authApi } from '../api/auth.api';

const rootReducer = combineReducers({
  user: userReducer,
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});