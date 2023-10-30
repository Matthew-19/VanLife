import React from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getHostVans } from "../../../services/api";
import { requireAuth } from "../../../services/utils";
import Loading from "../../../components/Loading/Loading";

export async function loader({ params, request }) {
  await requireAuth(request);
  return defer({ hostVan: getHostVans(params.id) });
}

export default function HostVanDetail() {
  const loaderData = useLoaderData();

  function renderHostVan(hostVanData) {
    return (
      <div className="host--vanDetail-container">
        <div className="host--vanDetail-header-group">
          <div className="host--vanDetail-header">
            <img
              className="host--vanDetail-img"
              src={hostVanData.imageUrl}
              alt="Host Van Detail image"
            />
            <div className="host--vanDetail-header-info">
              <div className={`host--vanDetail-type ${hostVanData.type}`}>
                {hostVanData.type}
              </div>
              <div className="host--vanDetail-name">{hostVanData.name}</div>
              <div className="host--vanDetail-price">
                ${hostVanData.price}
                <span>/day</span>
              </div>
            </div>
          </div>

          <nav className="host--vanDetail-nav">
            <NavLink
              to="details"
              className={({ isActive }) => (isActive ? "activeStyle" : "")}
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) => (isActive ? "activeStyle" : "")}
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) => (isActive ? "activeStyle" : "")}
            >
              Photos
            </NavLink>
          </nav>
        </div>

        <Outlet context={{ hostVanData }} />
      </div>
    );
  }

  return (
    <section className="host--vanDetail">
      <Link to="../vans" className="host--vanDetail-back back-arrow">
        &larr; Back to all vans
      </Link>
      <React.Suspense fallback={<Loading />}>
        <Await resolve={loaderData.hostVan}>{renderHostVan}</Await>
      </React.Suspense>
    </section>
  );
}
