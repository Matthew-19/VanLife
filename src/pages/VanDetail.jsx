import React from "react";
import { useParams, Link } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [vanData, setVanData] = React.useState(null);

  React.useEffect(() => {
    async function getData() {
      const res = await fetch(`/api/vans/${params.id}`);
      const data = await res.json();
      setVanData(data.vans);
    }
    getData();
  }, [params.id]);

  return (
    <section className="vanDetail">
      <Link to="/VanLife/vans" className="vanDetail--back-btn">
        Back to all vans
      </Link>
      {vanData ? (
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
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}
