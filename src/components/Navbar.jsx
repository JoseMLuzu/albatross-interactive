import { useState, useEffect } from "react";
import "../styles/components/Navbar.css";
import logoi from "../../public/images/Albatross_Interactive_Logo(1).png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-content">
        <div
          className="nav-logo desktop-logo"
          onClick={() => scrollToSection("hero")}
        >
          <img src={logoi} alt="Logo" />
        </div>

        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <div className="mobile-logo">
            <img
              src={logoi}
              alt="Logo"
              onClick={() => scrollToSection("hero")}
            />
          </div>
          <button onClick={() => scrollToSection("team")}>Team</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
