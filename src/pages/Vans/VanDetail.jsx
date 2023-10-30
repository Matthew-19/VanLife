import React from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { getVans } from "../../services/api";
import Loading from "../../components/Loading/Loading";

export async function loader({ params }) {
  return defer({ van: getVans(params.id) });
}

export default function VanDetail() {
  const location = useLocation();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const loaderData = useLoaderData();

  function renderVanDetail(vanData) {
    return (
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
    );
  }

  return (
    <section className="vanDetail">
      <Link
        to={`..${search}`}
        relative="path"
        className="vanDetail--back-btn back-arrow"
      >
        &larr; Back to {type} vans
      </Link>
      <React.Suspense fallback={<Loading />}>
        <Await resolve={loaderData.van}>{renderVanDetail}</Await>
      </React.Suspense>
    </section>
  );
}
