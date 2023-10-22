import React from "react";
import { Link } from "react-router-dom";

export default function VanCard(props) {
  return (
    <div className="van--card">
      <Link to={`/VanLife/vans/${props.id}`}>
        <img className="van--img" src={props.img} alt="van-image" />
        <div className="van--info">
          <div className="van--name">{props.name}</div>
          <div className="van--price">${props.price}</div>
          <div className={`van--type ${props.type}`}>{props.type}</div>
        </div>
      </Link>
    </div>
  );
}
