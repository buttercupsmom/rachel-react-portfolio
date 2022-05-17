// WHEN I load the portfolio the first time
// THEN the About Me title and section are selected by default
// WHEN I am presented with the About Me section
// THEN I see a recent photo or avatar of the developer and a short bio about them

import React from "react";
import "../main.css";
import "../About.css";
import self from "../../imgs/self.jpeg";

function About() {
  return (
    <div className="container">
      <h1 href="#aboutme">About Me</h1>
      <div className="container-child">
        <p>
          Hello! I'm Rachel Haddad, a passionate and qualified Full Stack Junior
          Web Developer! When I'm not programming, I love to spend as much time
          as possible with my pup Buttercup.
        </p>
        <img id="self-image" src={self} alt="Headshot of Rachel" />
      </div>
    </div>
  );
}

export default About;
