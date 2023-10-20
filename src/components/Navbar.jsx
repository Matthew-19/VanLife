import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import NavLinks from "./NavLinks";

export default function Navbar() {
  // {
  //   name: "Host",
  //   path: "/host",
  // },
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Vans",
      path: "/vans",
    },
  ];

  const navLinkElements = navLinks.map((link) => (
    <NavLinks
      key={link.path}
      path={link.path}
      name={link.name}
      isSelected={link.path === window.location.pathname ? true : false}
    />
  ));

  // Get Live Window Width
  // Getting window width after resizing

  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    function windowTrackerWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", windowTrackerWidth);

    return function () {
      window.removeEventListener("resize", windowTrackerWidth);
    };
  }, [windowWidth]);

  // Checking if window width is small or not (Boolean)

  const [smallWindow, setSmallWindow] = React.useState(
    windowWidth <= 576 ? true : false
  );
  React.useEffect(() => {
    setSmallWindow(windowWidth <= 576 ? true : false);
  }, [windowWidth]);

  // Checking if window is small then hide Links in NavBar

  const [show, setShow] = React.useState(smallWindow ? false : true);
  React.useEffect(() => {
    setShow(smallWindow ? false : true);
  }, [smallWindow]);

  // Toggling Show State with a Button to show/hide Links

  function linksToggle() {
    setShow((prevShow) => !prevShow);
  }

  // Location Chamge

  // Really Need To focus on understanding this part More!!!!!
  const location = useLocation();
  React.useEffect(() => {
    // execute on location change
    if (smallWindow) {
      setShow(false);
    }
  }, [location]);
  // Really Need To focus on understanding this part More!!!!!

  return (
    <nav>
      <div className="nav--container">
        <Link to="/">
          <img src={Logo} alt="Van Life Logo" className="nav--logo" />
        </Link>
        {smallWindow && (
          <div className="nav--button" onClick={linksToggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
        {show && <div className="nav--links">{navLinkElements}</div>}
      </div>
    </nav>
  );
}
