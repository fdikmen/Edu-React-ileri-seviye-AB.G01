import React, { useState,useMemo,useCallback } from "react";

export default function UseCallBackComp() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false);

  // const factorial = useCallback(computedMethod(),[dependencies])
  const factorial = useCallback(() => Factorial(number), [number]);

  const setNumberHandler = (e) => {
    // console.log("setNumberHandler clicked");
    setNumber(Number(e.target.value));
  }
console.log("factorial",factorial);
  return <div>Use Call BackComp
    <div>
      <h1>Factorial of {number} is {factorial}</h1>
      <input type="text" onChange={setNumberHandler}/>
      <hr/>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      <p>{toggle ? "True" : "False"}</p>
    </div>
  </div>;
}

//Recursive Factorial Method
function Factorial(n) {
  // console.log("Factorial Called");
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
