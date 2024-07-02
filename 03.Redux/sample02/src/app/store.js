import { configureStore,combineReducers } from '@reduxjs/toolkit';
import {reducer} from '../feauters/counterSlice';

//Reducerlarimizi birlestir
const rootReducer = combineReducers({
    counter: reducer,
  });
//Store olustur
export const store = configureStore({
    reducer: rootReducer,
  });