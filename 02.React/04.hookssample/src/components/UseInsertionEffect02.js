import React, { useInsertionEffect, useState } from "react";

export default function UseInsertionEffect02() {
  const [theme, setTheme] = useState("dark");

  useInsertionEffect(() => {
    const styleRule = getStyleRule(theme);
    document.head.appendChild(styleRule);
    return () => {
      document.head.removeChild(styleRule);
    };
  }, [theme]);

  return <div>
    <h1>UseInsertionEffect02</h1>
    <h4>Theme: {theme}</h4>
    <button
    onClick={() =>setTheme(theme === "dark" ? "white" : "dark") }>
        Change Theme
    </button>
    <hr />
    <button>FIRST</button><br />
    <button>SECOND</button>
    <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
    </p>
  </div>;
}

const getStyleRule = (theme) => {
    const style = document.createElement("style");
    style.innerHTML = `
        body {
        background-color: ${theme === "dark" ? "black" : "white"};
        color: ${theme === "dark" ? "white" : "black"};
        },
        button {
        background-color: ${theme === "dark" ? "black" : "white"};
        color: ${theme === "dark" ? "white" : "black"};
        }
    `;
    return style;
    }
