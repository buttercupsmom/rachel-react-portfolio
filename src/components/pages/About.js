import React from "react";
import "../main.css";
import "../About.css";
import self from "../../imgs/self.jpeg";

const About = () => {
  return (
    <>
      <div className="container">
        <h1 className="about-title">About Me</h1>
        <div className="container-child">
          <p>
            Hello! I'm Rachel Haddad, a passionate and qualified Full Stack
            Junior Web Developer! When I'm not programming, I love to spend as
            much time as possible with my pup Buttercup.
          </p>
          <img id="self-image" src={self} alt="Headshot of Rachel" />
        </div>
      </div>
    </>
  );
};

export default About;
