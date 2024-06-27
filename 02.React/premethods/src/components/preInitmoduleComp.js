import React from "react";
import { preInitmodule } from "react-dom";

export default function preInitmoduleComp() {
  //When render
  preInitmodule("https://cdn.jsdelivr.net/moduel.js", {
    as: "script",
    crossOrigin: "anonymous",
    integrity: "xxxxxx",
    nonce: "123456",
  });

  //In event handler
  const handleClick = () => {
    preInitmodule("https://cdn.jsdelivr.net/moduel.js", {
      as: "script",
      crossOrigin: "anonymous",
      integrity: "xxxxxx",
      nonce: "123456",
    });
  };

  return (
    <div>
      preInitmoduleComp
      <button onClick={handleClick}>Get preInitmodule</button>
    </div>
  );
}
