import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function VanCard(props) {
  return (
    <Link to={props.id} state={{ search: props.search, type: props.typeFilter }}>
      <div className="van--card">
        <div className="van--card-imgCover">
          <img className="van--img" src={props.img} alt={`${props.name} van-image`} />
        </div>
        <div className="van--info">
          <div className="van--name">{props.name}</div>
          <div className="van--price">${props.price}</div>
          <div className={`van--type ${props.type}`}>{props.type}</div>
        </div>
      </div>
    </Link>
  );
}
