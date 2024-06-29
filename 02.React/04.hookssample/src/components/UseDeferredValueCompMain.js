import React, { useState } from "react";
import UseDeferredValueCompSub from "./UseDeferredValueCompSub";

export default function UseDeferredValueCompMain() {
  const [userInput, setUserInput] = useState("")
  
  const handleInputChange = (e) => {
    setUserInput(e.target.value)
  }

  return <div>
    <h1>Parent Component</h1>
    <label>Enter text: </label>
    <input type="text" value={userInput} onChange={handleInputChange} />
    
    <UseDeferredValueCompSub input={userInput} />
  </div>;
}
