import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/CounterSlice';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};