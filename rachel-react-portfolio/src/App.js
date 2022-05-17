import React from "react";
import "./App.css";
import "./index.css";
import "../src/components/main.css";
import Navigation from "../src/components/pages/Navigation";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
// use router

function App() {
  return (
    <div>
      <Navigation />

      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
