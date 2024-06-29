import React, { useState } from "react";
import { useMemo } from "react";
import UseMemoHeader from "./UseMemoHeader";

// useEffect(computedMethod(),[dependencies])
// const memoizedValue = useMemo(computedMethod(),[dependencies])

export default function UseMemoComp() {
  const [number, setNumber] = useState(0);

  return <div>Use Memo Comp
    <UseMemoHeader title="Use Memo Header" />
    <h2>{number}</h2>
    <button onClick={() => setNumber(number + 1)}>+</button>
  </div>;
}
