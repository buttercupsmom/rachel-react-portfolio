import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";

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
