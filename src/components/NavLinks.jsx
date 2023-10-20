import { Link } from "react-router-dom";

export default function NavLinks(props) {
  const selected = props.isSelected ? "selected" : "";

  return (
    <Link className={selected} to={props.path}>
      {props.name}
    </Link>
  );
}
