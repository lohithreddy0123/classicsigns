import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./HERO.css";

import hor1 from "../../assets/images/hor1.png";
import hor5 from "../../assets/images/hor5.png";
import hor2 from "../../assets/images/hor2.png";
import hor3 from "../../assets/images/hor8.jpg";

const slides = [
  {
    image: hor1,
    title: "72-Inch Round Porcelain Signs",
    subtitle: "Custom enamel buttons & round signage for collectors."
  },
  {
    image: hor5,
    title: "Vintage Round Neon Signs",
    subtitle: "Make a statement with retro neon & porcelain."
  },
  {
    image: hor2,
    title: "Heritage Button Signage",
    subtitle: "Classic designs built to last decades."
  },
  {
    image: hor3,
    title: "Custom Collector Pieces",
    subtitle: "From enamel buttons to large round signs."
  }
];

const HERO = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (distance < -50) {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleQuoteClick = () => {
    navigate("/contact");
  };

  return (
    <section
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentIndex ? "active" : ""}`}
        >
          <div className="hero-image-wrapper">
            <img
              src={slide.image}
              alt={slide.title}
              className="hero-image"
            />

            <div className="hero-shadow" />

            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>

              {/* CTA */}
              <button
                className="hero-btn"
                onClick={handleQuoteClick}
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default HERO;