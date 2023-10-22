import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Details() {
  const { hostVanData } = useOutletContext();

  return (
    <div className="host--vanDetail-details">
      <div className="name">
        <span>Name: </span>
        {hostVanData.name}
      </div>
      <div className="type">
        <span>Category: </span>
        {hostVanData.type}
      </div>
      <div className="description">
        <span>Description: </span>
        {hostVanData.description}
      </div>
      <div className="visibility">
        <span>Visibility: </span>
        Public
      </div>
    </div>
  );
}
