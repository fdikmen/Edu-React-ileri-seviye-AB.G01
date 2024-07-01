import React, { useSyncExternalStore } from "react";

/**
 useSyncExternalStore(
        subscribe,
        getSnapshot,
        [getServerSnapshot]?
    )
 */

export default function UseSyncExternalStore() {
  const subscribe = (listener) => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  };


  const width = useSyncExternalStore(subscribe, () => window.innerWidth);

  return <div>UseSyncExternalStore
    <br />
    Width: {width}
  </div>;
}
