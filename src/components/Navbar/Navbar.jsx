import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import Avataricon from "../../assets/images/avatar-icon.png";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const navigate = useNavigate();
  function fakeLogout() {
    localStorage.removeItem("loggedin");
    navigate(location.pathname)
  }

  const navLinks = [
    {
      name: "Home",
      path: "/VanLife/",
    },
    {
      name: "Host",
      path: "host",
    },
    {
      name: "About",
      path: "about",
    },
    {
      name: "Vans",
      path: "vans",
    },
  ];

  const navLinkElements = navLinks.map((link) => (
    <NavLinks key={link.path} path={link.path} name={link.name} />
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

  const [isSmallWindow, setIsSmallWindow] = React.useState(
    windowWidth <= 576 ? true : false
  );
  React.useEffect(() => {
    setIsSmallWindow(windowWidth <= 576 ? true : false);
  }, [windowWidth]);

  // Checking if window is small then hide Links in NavBar

  const [show, setShow] = React.useState(isSmallWindow ? false : true);
  React.useEffect(() => {
    setShow(isSmallWindow ? false : true);
  }, [isSmallWindow]);

  // Toggling Show State with a Button to show/hide Links

  function linksToggle() {
    setShow((prevShow) => !prevShow);
  }

  // Location Chamge
  const location = useLocation();
  React.useEffect(() => {
    // execute on location change
    if (isSmallWindow) {
      setShow(false);
    }
  }, [location]);

  return (
    <nav className="nav">
      <div className="nav--container">
        <Link to="/VanLife/">
          <img src={Logo} alt="Van Life Logo" className="nav--logo" />
        </Link>
        <div className="nav--rightside">
          {isSmallWindow && (
            <div className="nav--button" onClick={linksToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          {show && <div className="nav--links">{navLinkElements}</div>}
          {localStorage.getItem("loggedin") ? (
            <button className="nav--logout" onClick={fakeLogout}>
              Log out
            </button>
          ) : (
            <Link to="login">
              <img
                src={Avataricon}
                alt="avatar-icon"
                className="nav--avatar-icon"
              />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
