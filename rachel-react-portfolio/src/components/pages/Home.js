import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "../Navbar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}

export default Home;
