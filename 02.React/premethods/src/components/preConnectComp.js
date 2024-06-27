import React from "react";
import { preConnect } from "react-dom";

export default function preConntectComp() {
  //When render
  preConnect("https://www.example.com");
  //In event handler
  const handleClick = () => {
    preConnect("https://www.example.com");
  };

  return (
    <div>
      preConntectComp
      <button onClick={handleClick}>Get Pre preConnect</button>
    </div>
  );
}
