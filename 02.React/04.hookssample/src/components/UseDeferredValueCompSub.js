import React, { useDeferredValue, useEffect } from "react";

export default function UseDeferredValueCompSub({ input }) {
   const deferredValue = useDeferredValue(input);
//deferredValue with useState
  // const [deferredValue, setDeferredValue] = React.useState(input);

  // useEffect(() => {
  //   setDeferredValue(input);
  // }, [input]);

  const renderInputs = () => {
    const inputs = [];
    for (let i = 0; i < 20000; i++) {
      inputs.push(<div key={i}>{deferredValue}</div>);
    }
    return inputs;
  };

  return <div>
    <h1>Display List</h1>
    {deferredValue}
    <p>
      {renderInputs()}
    </p>
  </div>;
}
