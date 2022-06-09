import React from "react";
import "../main.css";
import "../About.css";
import self from "../../imgs/self.jpeg";

const About = () => {
  return (
    <>
      <div className="container">
        <br></br>
        <h1 className="about-title">About Me</h1>
        <br></br>
        <div className="container-child">
          <p className="about-bio">
            Hello! I'm Rachel Haddad, a passionate and qualified Full Stack
            Junior Web Developer with a background in customer service. I
            recently earned my Certificate of Completion for Full Stack Web
            Development from Northwestern University Coding Bootcamp, gaining
            skills in JavaScript ES6+, CSS, HTML, Git, Nodejs, jQuery,
            Bootstrap, MySQL, ExpressJS, Sequelize, MongoDB, Mongoose ODM, and
            accessibility. I am elated to apply my newly developed skills to a
            Junior Level Position. When I'm not coding, I enjoy spending time
            with my pup Buttercup, friends and family!
          </p>
          <br></br>
          <img id="self-image" src={self} alt="Headshot of Rachel" />
        </div>
      </div>
    </>
  );
};

export default About;
