import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./pages/About";
// import Footer from "./Footer";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

export default function HomeContainer() {
  const [currentPage, SetCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => SetCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      {/* <Footer /> */}
    </div>
  );
}
