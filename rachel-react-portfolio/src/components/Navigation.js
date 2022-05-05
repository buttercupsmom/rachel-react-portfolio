// WHEN I view the header
// THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio
// WHEN I view the navigation titles
// THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

import React from "react";

function Navigation() {
  const linkStyle = { border: "1x black", padding: "5px" };
  return (
    <header className="main-header-navigation">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <h2>
          <a href="/">
            <title>Rachel Haddad's Portfolio</title>
          </a>
        </h2>
        <nav>
          <ul>
            <li>
              <a style={linkStyle} href="#aboutme">
                About Me
              </a>
            </li>
            <li>
              <a style={linkStyle} href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a style={linkStyle} href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a style={linkStyle} href="#resume">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
}

export default Navigation;
