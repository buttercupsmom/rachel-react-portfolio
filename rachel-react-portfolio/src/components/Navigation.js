// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

import React from "react";
import "./styles/Header.css";
import "./styles/main.css";

function Navigation() {
  return (
    <header className="main-header-navigation">
      <h1>
        <a href="/">
          <title>Rachel Haddad's Portfolio</title>
        </a>
      </h1>
      <nav>
        <h2>Rachel Haddad's Portfolio</h2>
        <ul className="nav-menu">
          <li className="list">
            <a href="#aboutme">About Me</a>
          </li>
          <li className="list">
            <a href="#projects">Projects</a>
          </li>
          <li className="list">
            <a href="#contact">Contact</a>
          </li>
          <li className="list">
            <a href="#resume">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
