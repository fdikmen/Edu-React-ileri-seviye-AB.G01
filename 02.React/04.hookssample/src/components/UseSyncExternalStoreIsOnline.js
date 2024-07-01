import React, { useSyncExternalStore } from "react";

export default function UseSyncExternalStoreIsOnline() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return <div>{isOnline ? "✅ Online" : "❌ Offline"}</div>;
}

function subscribe(callback) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}
