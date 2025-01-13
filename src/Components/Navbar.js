import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("download"); // Default active section
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu toggle

  // Function to handle click and scroll to the section
  const handleScrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
      setActiveSection(sectionId); // Update active section
      setIsMenuOpen(false); // Close the menu on click (for small screens)
    }
  };

  // Function to detect the section in view when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["download", "about", "features", "contact"];
      let currentSection = activeSection;

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            window.scrollY >= sectionTop - sectionHeight / 3 &&
            window.scrollY < sectionTop + sectionHeight / 3
          ) {
            currentSection = sectionId;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav
      style={{ position: "fixed", top: 0, zIndex: 200, width: "100%" }}
      className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"
    >
      <div className="container">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={logo} alt="FoodDude Logo" className="img-fluid" />
        </a>

        {/* Navbar Toggler for Small Screens */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} // Show/Hide menu on small screens
        >
          <div className="navbar-nav ms-auto">
            <button
              className={`nav-link text-dark ${
                activeSection === "download" ? "active-nav" : ""
              }`}
              onClick={() => handleScrollTo("download")}
            >
              Download the app
            </button>
            <button
              className={`nav-link text-dark ${
                activeSection === "about" ? "active-nav" : ""
              }`}
              onClick={() => handleScrollTo("about")}
            >
              About Us
            </button>
            <button
              className={`nav-link text-dark ${
                activeSection === "features" ? "active-nav" : ""
              }`}
              onClick={() => handleScrollTo("features")}
            >
              Features of the App
            </button>
            <button
              className={`nav-link text-dark ${
                activeSection === "contact" ? "active-nav" : ""
              }`}
              onClick={() => handleScrollTo("contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
