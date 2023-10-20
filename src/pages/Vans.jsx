import React from "react";
import VanCard from "../components/VanCard";

export default function Vans() {
  // Fetch Data from API

  const [vansData, setVansData] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const res = await fetch("/api/vans");
      const data = await res.json();
      setVansData(data.vans);
    }
    getData();
  }, []);

  const vanElements = vansData.map((van) => (
    <VanCard
      key={van.id}
      id={van.id}
      name={van.name}
      descripton={van.descripton}
      img={van.imageUrl}
      price={van.price}
      type={van.type}
    />
  ));

  return (
    <section className="vans">
      <div className="vans--container">
        <h1 className="vans--header">Explore our van options</h1>

        <div className="vans--filters">
          <span className="vans--filter simple">Simple</span>
          <span className="vans--filter luxury">Luxury</span>
          <span className="vans--filter rugged">Rugged</span>
          <button className="vans--clearFilters">Clear filters</button>
        </div>

        <div className="vans--cards-container">{vanElements}</div>
      </div>
    </section>
  );
}
