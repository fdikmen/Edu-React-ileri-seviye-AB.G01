import React, { useState,useMemo } from "react";

export default function UseMemoComp02() {
  const [number, setNumber] = useState(1);
  const [toggle, setToggle] = useState(false);

  // const factorial = Factorial(number);
  // const factorial = useMemo(computedMethod(),[dependencies])
  const factorial = useMemo(() => Factorial(number), [number]);

  const setNumberHandler = (e) => {
    console.log("setNumberHandler clicked");
    setNumber(Number(e.target.value));
  }

  return <div>UseMemoComp02
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
  console.log("Factorial Called");
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}
