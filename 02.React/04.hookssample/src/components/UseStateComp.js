// import {useState} from 'react'
import React, { useState } from "react";

export default function UseStateComp() {
  //JS
  const [counter, setCounter] = useState(0);
  //Increment function
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    //JSX
    <div>
      <h1> Use State Component</h1>
      <h2>Counter : {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}
