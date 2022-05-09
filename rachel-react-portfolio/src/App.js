import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";

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
