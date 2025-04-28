import React, { useState } from "react";

export default function useDataInfo() {
  const [status, setStatus] = useState(null); // null means offline or true means online
  window.addEventListener("Offline", () => {
    setStatus(false);
  });
  window.addEventListener("Online", () => {
    setStatus(true);
  });

  return status;
}
