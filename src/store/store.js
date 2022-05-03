import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './slice';

const reducer = combineReducers({
  cards: cardReducer
})

const store = configureStore({reducer})

export default store