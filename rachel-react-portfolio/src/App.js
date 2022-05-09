import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

function App() {
  return (
    <div>
      <Navigation />

      <About />
      <Contact />
    </div>
  );
}

export default App;
