import React from "react";
import { preInit } from "react-dom";

export default function preInitComp() {
  //When render
  preInit("https://cdn.jsdelivr.net/moduel.js", {
    as: "script",
    crossOrigin: "anonymous",
    integrity: "sha384-1XXXXXXXX",
    nonce: "123456",
  });

  //In event handler
  const handleClick = () => {
    preInit("https://cdn.jsdelivr.net/moduel.js", {
      as: "script",
      crossOrigin: "anonymous",
      integrity: "sha384-1XXXXXXXX",
      nonce: "123456",
    });
  };
  return (
    <div>
      preInitComp
      <button onClick={handleClick}>Get preInit</button>
    </div>
  );
}
