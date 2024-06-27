import React, { Suspense, lazy } from "react";
// import MarkdownPreview from './MarkdownPreview'

const UserProfiles = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("./ProfleCom"));
    }, 3000);
  });
});

function NewComponent() {
  return <div>New Component</div>;
}

export default function App() {
  return (
    <div>
      App
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfiles />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewComponent />
      </Suspense>
    </div>
  );
}
