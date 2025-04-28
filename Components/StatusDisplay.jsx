// StatusDisplay.js
import React from "react";
import useDataInfo from "../Hooks/useDataInfo";

function StatusDisplay() {
  const status = useDataInfo();

  return (
    <div>
      {status ? (
        <div>
          <h1>You are online</h1>
        </div>
      ) : (
        <div>
          <h1>You are offline</h1>
        </div>
      )}
    </div>
  );
}

export default StatusDisplay;
