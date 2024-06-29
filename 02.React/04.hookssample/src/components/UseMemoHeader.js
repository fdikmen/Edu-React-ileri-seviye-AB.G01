import React, { memo } from "react";

function UseMemoHeader({ title }) {
  console.log("UseMemoHeader Rendered");
  return <h2>{title}</h2>;
}

// export default (UseMemoHeader);
export default memo(UseMemoHeader);
