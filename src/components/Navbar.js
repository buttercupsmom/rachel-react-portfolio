import React from "react";
import "./Header.css";
import "./main.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="nav-container">
      <h1 className="title">Rachel Haddad's Portfolio</h1>
      <ul className="nav-menu">
        <li className="nav">
          <a href="#about" onClick={() => handlePageChange("About")}>
            <h1>About Me</h1>
          </a>
        </li>
        <li className="nav">
          <a href="#projects" onClick={() => handlePageChange("Projects")}>
            <h1>Projects</h1>
          </a>
        </li>
        <li className="nav">
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            <h1>Contact</h1>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
