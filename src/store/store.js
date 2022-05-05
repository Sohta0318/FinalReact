import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './slice';

const reducer = combineReducers({
  cards: cardReducer
})

const store = configureStore({reducer, middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })})

export default store