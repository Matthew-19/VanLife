import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <section className="error--section">
      <div className="error--container">
        <h1 className="error--msg">Error: {error.message}</h1>
        {error.status && (
          <h4 className="error--status">
            {error.status} - {error.statusText}
          </h4>
        )}
      </div>
    </section>
  );
}
