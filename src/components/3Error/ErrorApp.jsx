import React, { useState } from "react";

function ErrorApp() {
  const [error, setError] = useState("");

  return (
    <div>
      <button onClick={() => setError("Error fetch API")}>Error</button>

      <button onClick={() => setError("Error Authentication")}>
        Another Error
      </button>

      <button onClick={() => setError("")}>Process Successful</button>

      {error && <h3>{error}</h3>}
    </div>
  );
}

export default ErrorApp;
