import React from "react";
import "../styles/Portfolio.css";
import "../../index.css";
import scottstots from "../../imgs/scottstots.png";
import umbrella from "../../imgs/umbrella.gif";
import social from "../../imgs/socialnetwork.png";
import password from "../../imgs/passwordgen.gif";
import buttercup from "../../imgs/buttercupquiz.png";
import weather from "../../imgs/WeatherDashboard.gif";

function Projects() {
  return (
    <div className="projects-container">
      <div className="container-one">
        <div id="projectOne" className="card">
          <a href="https://project-two-threeandalady.herokuapp.com/">
            Scott's Tots
          </a>
          <div className="container">
            <img
              id="scotttot"
              alt="shot of Scott's tots messageboard"
              src={scottstots}
            />
            <a href="https://github.com/threemenandalady/project-two">
              Repository
            </a>
          </div>
        </div>
        <br />
        <div className="container-one">
          <div id="projectTwo" className="card">
            <a href="The-camelCasers/pages">Do You Need an Umbrella?</a>
            <br />
            <img
              id="scotttot"
              src={umbrella}
              alt="gif of Do You Need an Umbrella"
            />
            <a href="https://github.com/The-camelCasers/project">Repository</a>
          </div>
        </div>
        <br />

        <div className="container-one">
          <div id="projectThree" className="card">
            <a href="https://github.com/buttercupsmom/social-network-startup">
              Social Network Startup
            </a>
            <img
              id="scotttot"
              src={social}
              alt="shot of Social Network using Thunderclients"
            />
            <a href="https://github.com/buttercupsmom/social-network-startup">
              Repository
            </a>
          </div>
        </div>
        <br />

        <div className="container-one">
          <div id="projectFour" className="card">
            <a href="https://buttercupsmom.github.io/passwordgenerator/">
              Password Generator
            </a>
            <img id="scotttot" src={password} alt="gif of Password Generator" />
            <a href="https://github.com/buttercupsmom/passwordgenerator">
              Repository
            </a>
          </div>
        </div>
        <br />

        <div className="container-one">
          <div id="projectFive" className="card">
            <a href="https://buttercupsmom.github.io/codingquiz/">
              Buttercup Quiz
            </a>
            <img id="scotttot" src={buttercup} alt="shot of Buttercup Quiz" />
            <a href="https://github.com/buttercupsmom/codingquiz">Repository</a>
          </div>
        </div>
        <br />

        <div className="container-one">
          <div id="projectSix" className="card">
            <a href="https://buttercupsmom.github.io/hw-6/">
              Weather Dashboard
            </a>
            <img id="scotttot" src={weather} alt="gif of Weather Dashboard" />
            <a href="https://github.com/buttercupsmom/hw-6">Repository</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
