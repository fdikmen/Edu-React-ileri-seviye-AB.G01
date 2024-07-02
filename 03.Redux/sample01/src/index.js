import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
/*alt
import {createStore} from 'redux';
const store = createStore();
*/

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//01-Reducer Olusturma
function myreducer(state, action) {
  if (action.type === "changeTheState") {
    return action.payload.newState;
  }
  return "state01";
}

//User Reducer
function userReducer(state = "Asya", { type, payload }) {
  if (type === "user/update") {
    return payload;
  }
  return state;
}

//Initial State for Products
const initialProducts = [
  { id: 1, name: "Samsung S21" },
  { id: 2, name: "Samsung S20" },
  { id: 3, name: "Apple S10" },
];

//Product Reducer
function productsReducer(state = initialProducts, { type, payload }) {
  switch (type) {
    case "products/add":
      return [...state, payload];
    default:
      return state;
  }
}

//Combine Reducers - Reducer ları birleştirme
/*const rootReducer = combineReducers({
  myreducer,
  userReducer,
  productsReducer,
});*/

const rootReducer = combineReducers({
  app:myreducer,
  user:userReducer,
  products:productsReducer,
});

//02-Store Olusturulma
// const mystore = configureStore({ reducer: myreducer });
const mystore = configureStore({ reducer: rootReducer });

//Store daki state i okuma
console.log("Initial/Ilk State:", mystore.getState());

//03-Action olusturma
const action = {
  type: "changeTheState",
  payload: { newState: "My new state" },
};

//04-Action i reducer a gonderme == dispatch
mystore.dispatch(action);
console.log("Guncel State:", mystore.getState());

//05-Store Abone Olma == subscribe
mystore.subscribe(() => {
  console.log("Store Changed(from subscribe())", mystore.getState());
});

mystore.dispatch(action);
mystore.dispatch(action);
mystore.dispatch(action);

// Alternatif action olusturma
const action02 = {
  type: "changeTheState",
  payload: { newState: "My new state 02 (from action02)" },
};
mystore.dispatch(action02);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={mystore}>
    <App />
  </Provider>
);
