import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <React.Fragment>
      <div className="sidebar-container">
        <button
          className="sidebar-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <button
          className="colormode-toggle"
          onClick={() => setIsLightMode(!isLightMode)}
        >
          <FontAwesomeIcon
            icon={faCircleHalfStroke}
            rotation={`${isLightMode ? 180 : 0}`}
          />
        </button>
      </div>
      <nav className={`nav-container ${isNavOpen ? "nav-open" : "nav-closed"}`}>
        <button
          className="sidebar-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <ul>
          <li className="nav-list" onClick={() => handleClick("/")}>
            Home
          </li>
          <li className="nav-list" onClick={() => handleClick("/profile")}>
            Profile
          </li>
          <li className="nav-list" onClick={() => handleClick("/projects")}>
            Projects
          </li>
          <li className="nav-list" onClick={() => handleClick("/contacts")}>
            Contacts
          </li>
          <li className="nav-list" onClick={() => handleClick("/about")}>
            About
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
