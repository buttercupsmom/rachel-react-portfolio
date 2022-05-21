import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./index.js";
import "../src/components/main.css";
import Home from "../src/components/pages/Home";
import About from "../src/components/pages/About";
import Projects from "../src/components/pages/Projects";
import Contact from "../src/components/pages/Contact";
// use router

function App() {
  return (
    <Router>
      <Home>
        <Routes>
          <Route
            exact
            path="/rachel-react-portfolio"
            element={<Home />}
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </Home>
    </Router>
  );
}

export default App;
