import React from "react";
import "./Header.css";
import "./main.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div className="headDiv">
      <div className="title">
        <h1 className="container">
          <a href="/" onClick={() => handlePageChange("About")}>
            Rachel Haddad's Portfolio
          </a>
        </h1>

        <nav>
          <ul className="nav-menu">
            <li className="nav">
              <a href="#about" onClick={() => handlePageChange("About")}>
                <span>
                  {" "}
                  <h1>About Me</h1>
                </span>
              </a>
            </li>
            <li className="nav">
              <a href="#projects" onClick={() => handlePageChange("Projects")}>
                <span>
                  {" "}
                  <h1>Projects</h1>
                </span>
              </a>
            </li>
            <li className="nav">
              <a href="#contact" onClick={() => handlePageChange("Contact")}>
                <span>
                  {" "}
                  <h1>Contact</h1>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
