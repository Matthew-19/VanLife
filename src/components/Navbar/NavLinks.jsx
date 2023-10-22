import { NavLink } from "react-router-dom";

export default function NavLinks(props) {
  return (
    <NavLink to={props.path} className={({isActive}) => isActive ? "selected" : null} >
      {props.name}
    </NavLink>
  );
}
