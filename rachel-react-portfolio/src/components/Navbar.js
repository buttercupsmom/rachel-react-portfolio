// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "./main.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <h1>Rachel Haddad's Portfolio</h1>
      <ul className="nav-menu">
        <li className="nav-link">
          <Link to="/rachel-react-portfolio">
            <h1>Home</h1>
          </Link>
        </li>
        <li className="nav">
          <Link to="/about">
            <h1>About Me</h1>
          </Link>
        </li>
        <li className="nav">
          <Link to="/projects">
            <h1>Projects</h1>
          </Link>
        </li>
        <li className="nav">
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
