import React from "react";
import { Link, useParams, NavLink, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  // Fetch Host Vans Data
  const [hostVanData, setHostVanData] = React.useState(null);
  const params = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setHostVanData(data.vans));
  }, []);

  return (
    <section className="host--vanDetail">
      <Link to="../vans" className="host--vanDetail-back back-arrow">
        &larr; Back to all vans
      </Link>
      {hostVanData ? (
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
      ) : (
        <div className="preloader">
          <div></div>
        </div>
      )}
    </section>
  );
}
