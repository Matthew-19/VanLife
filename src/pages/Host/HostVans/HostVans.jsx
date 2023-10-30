import React from "react";
import { Link, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVans } from "../../../services/api";
import { requireAuth } from "../../../services/utils";
import Loading from "../../../components/Loading/Loading";

export async function loader({ request }) {
  await requireAuth(request);
  return defer({ hostVans: getHostVans() });
}

export default function HostVans() {
  const loaderData = useLoaderData();

  function renderHostVans(hostVansData) {
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

    return <div className="host--vans-container">{hostVansElements}</div>;
  }

  return (
    <section className="host--vans">
      <h1 className="host--vans-header">Your listed vans</h1>
      <React.Suspense fallback={<Loading />}>
        <Await resolve={loaderData.hostVans}>{renderHostVans}</Await>
      </React.Suspense>
    </section>
  );
}
