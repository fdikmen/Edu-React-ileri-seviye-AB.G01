import React from "react";
import { useState, useRef } from "react";

export default function UseRefComp() {
  const [count01, setCount01] = useState(0);
  const count02 = useRef(0);
  const titleId = useRef("headerTitle");
  return <div>
    <h1 id={titleId.current}>Use Ref Comp</h1>
    <h2>count01 (useState): {count01}</h2>
    <h2>count02 (useRef): {count02.current}</h2>
    <button onClick={() => setCount01(count01 + 1)}>count01-(useState)</button>
    <button onClick={() => count02.current++}>count02-(useRef)</button>
  </div>;
}
