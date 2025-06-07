import { useEffect, useState } from "react";
import "../styles/components/Hero.css";
import "/images/Albatross_Interactive_Logo.png";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content"></div>
      <div
        className="hero-image"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src="/images/Albatross_Interactive_Logo.png"
          alt="Hero"
          className="imghero"
        />
      </div>
    </section>
  );
};

export default Hero;
