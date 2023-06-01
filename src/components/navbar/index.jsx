import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./style.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <React.Fragment>
      <div className="sidebar-container">
        <button
          className="sidebar-toggle"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
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
          <li className="nav-list">Profile</li>
          <li className="nav-list">Projects</li>
          <li className="nav-list">Contacts</li>
          <li className="nav-list">About</li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
