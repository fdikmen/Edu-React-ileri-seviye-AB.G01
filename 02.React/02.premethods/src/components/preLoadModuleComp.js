import React from "react";
import { preLoadModule } from "react-dom";

export default function preLoadModuleComp() {
  //when render
  preLoadModule("https://cdn.jsdelivr.net/moduel.js", {
    as: "script",
    crossOrigin: "anonymous",
    integrity: "sha384-1XXXXXXXX",
    nonce: "123456",
  });

  //In event handler
  const handleClick = () => {
    preLoadModule("https://cdn.jsdelivr.net/moduel.js", {
      as: "script",
      crossOrigin: "anonymous",
      integrity: "sha384-1XXXXXXXX",
      nonce: "123456",
    });
  };

  return (
    <div>
      preLoadModuleComp
      <button onClick={handleClick}>Get preLoadModule</button>
    </div>
  );
}
