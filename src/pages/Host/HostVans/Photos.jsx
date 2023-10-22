import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const { hostVanData } = useOutletContext();

  return (
    <img
      src={hostVanData.imageUrl}
      alt="Van Image"
      style={{ width: "103px", height: "101px" }}
    />
  );
}
