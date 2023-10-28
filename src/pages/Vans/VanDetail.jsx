import React from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { getVans } from "../../services/api";

export function loader({ params }) {
  return getVans(params.id);
}

export default function VanDetail() {
  const location = useLocation();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const vanData = useLoaderData();

  return (
    <section className="vanDetail">
      <Link
        to={`..${search}`}
        relative="path"
        className="vanDetail--back-btn back-arrow"
      >
        &larr; Back to {type} vans
      </Link>
      <div className="vanDetail--container">
        <img
          src={vanData.imageUrl}
          alt="van-image"
          className="vanDetail--img"
        />
        <div className="vanDetail--info">
          <div className={`vanDetail--type ${vanData.type}`}>
            {vanData.type}
          </div>
          <div className="vanDetail--name">{vanData.name}</div>
          <div className="vanDetail--price">${vanData.price}</div>
          <p className="vanDetail--description">{vanData.description}</p>
          <Link>
            <button className="vanDetail--rent-btn orange-btn">
              Rent this van
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
