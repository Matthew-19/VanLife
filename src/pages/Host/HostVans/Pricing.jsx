import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const { hostVanData } = useOutletContext();

  return (
    <div style={{ fontWeight: "bold" }}>
      ${hostVanData.price}
      <span style={{ fontWeight: "normal" }}>/day</span>
    </div>
  );
}
