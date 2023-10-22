import React from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  // Fetch Host Vans Data
  const [hostVansData, setHostVansData] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVansData(data.vans));
  }, []);

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
      <div className="host--vans-container">
        {hostVansData.length > 0 ? (
          hostVansElements
        ) : (
          <div className="preloader">
            <div></div>
          </div>
        )}
      </div>
    </section>
  );
}
