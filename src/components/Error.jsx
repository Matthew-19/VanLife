import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <Navbar />
      <section className="error--section">
        <div className="error--container">
          <h1 className="error--msg">Error: {error.message}</h1>
          <h4 className="error--status">
            {error.status} - {error.statusText}
          </h4>
        </div>
      </section>
      <Footer />
    </div>
  );
}
