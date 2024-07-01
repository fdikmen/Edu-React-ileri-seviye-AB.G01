import React, { useEffect, useInsertionEffect, useLayoutEffect } from "react";

// useLayoutEffect(function, dependencies[])
// useInsertionEffect(function, dependencies[])
// useEffect(function, dependencies[])

export default function UseLayoutEffect() {
  useLayoutEffect(() => {
    console.log("useLayoutEffect 02");
  }, []);

  useInsertionEffect(() => {
    console.log("useInsertionEffect 01");
  }, []);

  useEffect(() => {
    console.log("useEffect 03");
  }, []);

  return <div>UseLayoutEffect</div>;
}
