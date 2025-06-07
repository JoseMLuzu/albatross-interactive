import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Team from "./components/Team";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./styles/global.css";

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ["hero", "team", "about", "projects", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollPosition / windowHeight);
      setCurrentSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar currentSection={currentSection} />
      <main>
        <Hero />
        <Team />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
