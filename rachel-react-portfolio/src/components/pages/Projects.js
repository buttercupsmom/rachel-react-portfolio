// // WHEN I am presented with the Portfolio section
// THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

// An image of the deployed application (either a short animated GIF or screenshot)
// The title of the project
// A link to the deployed application
// A link to the corresponding GitHub repository
import React from "react";

function Projects() {
  return (
    <div className="projects-container">
      <div className="container">
        <div id="projectOne">
          <a href="https://github.com/threemenandalady/project-two">
            Scott's Tots
          </a>
        </div>
        <div id="projectTwo">
          <a href="https://github.com/The-camelCasers/project">
            Do You Need an Umbrella?
          </a>
        </div>
        <div id="projectThree">
          <a href="https://github.com/buttercupsmom/social-network-startup">
            Social Network Startup
          </a>
        </div>
        <div id="projectFour">
          {" "}
          <a href="https://github.com/buttercupsmom/passwordgenerator">
            Password Generator
          </a>
        </div>
        <div id="projectFive">
          <a href="https://github.com/buttercupsmom/codingquiz">
            Buttercup Quiz
          </a>
        </div>
        <div id="projectSix">
          <a href="https://github.com/buttercupsmom/hw-6">Weather Dashboard</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
