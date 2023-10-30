import React from "react";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import VanCard from "./VanCard";
import { getVans } from "../../services/api";
import Loading from "../../components/Loading/Loading";

export function loader() {
  return defer({ vans: getVans() });
}

export default function Vans() {
  const [searchparams, setSearchParams] = useSearchParams();
  const typeFilter = searchparams.get("type");
  const isFiltered = searchparams.toString();

  const loaderData = useLoaderData();

  function handleFilter(key, value) {
    const newSearchParams = new URLSearchParams(searchparams);
    if (value === null) {
      newSearchParams.delete(key);
    } else {
      newSearchParams.set(key, value);
    }
    return `?${newSearchParams.toString()}`;
  }

  function renderVansHero(vansData) {
    const displayedVans = typeFilter
      ? vansData.filter((van) => van.type === typeFilter)
      : vansData;

    const vanElements = displayedVans.map((van) => (
      <VanCard
        key={van.id}
        id={van.id}
        name={van.name}
        descripton={van.descripton}
        img={van.imageUrl}
        price={van.price}
        type={van.type}
        search={`?${searchparams.toString()}`}
        typeFilter={typeFilter}
      />
    ));

    return (
      <div className="vans--hero">
        <div className="vans--filters">
          <span
            className={`vans--filter simple ${
              typeFilter === "simple" && "selected"
            }`}
            onClick={() => setSearchParams(handleFilter("type", "simple"))}
          >
            Simple
          </span>
          <span
            className={`vans--filter luxury ${
              typeFilter === "luxury" && "selected"
            }`}
            onClick={() => setSearchParams(handleFilter("type", "luxury"))}
          >
            Luxury
          </span>
          <span
            className={`vans--filter rugged ${
              typeFilter === "rugged" && "selected"
            }`}
            onClick={() => setSearchParams(handleFilter("type", "rugged"))}
          >
            Rugged
          </span>
          {isFiltered && (
            <button
              className="vans--clearFilters"
              onClick={() => setSearchParams(handleFilter("type", null))}
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="vans--cards-container">{vanElements}</div>
      </div>
    );
  }

  return (
    <section className="vans">
      <div className="vans--container">
        <h1 className="vans--header">Explore our van options</h1>
        <React.Suspense fallback={<Loading />}>
          <Await resolve={loaderData.vans}>{renderVansHero}</Await>
        </React.Suspense>
      </div>
    </section>
  );
}
