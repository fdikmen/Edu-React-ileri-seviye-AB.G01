import React from "react";
import { preLoad } from "react-dom";

export default function preLoadComp() {
  //SCRIPT
  //   preLoad("https://cdn.jsdelivr.net/school.js", {
  //     as: "script",
  //   });

  const handleClick = () => {
    preLoad("https://cdn.jsdelivr.net/school.js", {
      as: "script",
    });
  };

  //STYLESHEET
  preLoad("https://cdn.jsdelivr.net/school.css", {
    as: "style",
  });

  //FONT
  preLoad("https://cdn.jsdelivr.net/school.woff2", {
    as: "font",
    crossOrigin: "anonymous",
  });

  preLoad("https://cdn.jsdelivr.net/school.js", {
    as: "fetch",
    crossOrigin: "anonymous", // or "use-credentials"
    fetchPriority: "high", // or "low" or "auto"
  });

  //imagesrcSet

  preLoad("https://example/banner.png", {
    as: "image",
    imageSrcSet: "/banner12.png 512w, /banner34.png 1024w, /banner56.png 2048w",
    imageSizes: "(max-width: 600px) 480px, (max-width: 900px) 800px, 1600px",
  });

  return (
    <div>
      <h1>Preload</h1>
      <p>Check the network tab to see the preloaded resources</p>
      <div onClick={handleClick}>Click ME!</div>
    </div>
  );
}
