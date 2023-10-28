import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../services/api";
import { requireAuth } from "../../../services/utils";

export async function loader({ request }) {
  await requireAuth(request);
  return getHostVans();
}

export default function HostVans() {
  const hostVansData = useLoaderData();

  const hostVansElements = hostVansData.map((van) => (
    <Link key={van.id} to={van.id}>
      <div className="host--vans-tile">
        <img
          src={van.imageUrl}
          alt="host-van-image"
          className="host--vans-img"
        />
        <div className="host--vans-info">
          <div className="host--vans-name">{van.name}</div>
          <div className="host--vans-price">${van.price}/day</div>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="host--vans">
      <h1 className="host--vans-header">Your listed vans</h1>
      <div className="host--vans-container">{hostVansElements}</div>
    </section>
  );
}
