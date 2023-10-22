import { Outlet, NavLink } from "react-router-dom"

export default function HostLayout() {

  return (
    <div className="host--page">
      <nav className="host--nav">
        <NavLink to="dashboard" className={({isActive})=> isActive ? "active" : null}>Dashboard</NavLink>
        <NavLink to="income" className={({isActive})=> isActive ? "active" : null}>Income</NavLink>
        <NavLink to="vans" className={({isActive})=> isActive ? "active" : null}>Vans</NavLink>
        <NavLink to="reviews" className={({isActive})=> isActive ? "active" : null}>Reviews</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}