import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const state = useSelector((state) => state);
  console.log("APP All State (Store):", state);

  const dispatch = useDispatch();

  const action = {
    type: "changeTheState",
    payload: { newState: "My new state from APP Component" },
  };

  const changeTheState = () => {
    dispatch(action);
  };

  return (
    <div>
      <h1>App Component</h1>
      {/* 
      <p>{state.myreducer}</p>
      <p>{state.userReducer}</p>

      <ul>
        {state.productsReducer.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
      <p>{state.app}</p>
      <p>{state.user}</p>

      <ul>
        {state.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <button onClick={changeTheState}>Change The State</button>
    </div>
  );
}
