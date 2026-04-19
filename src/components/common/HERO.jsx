import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HERO.css";
import { images } from "../../assets/imageUrls";

const slides = [
  {
    image: images.hor1,
    title: "72-Inch Round Porcelain Signs",
    subtitle: "Custom enamel buttons & round signage for collectors."
  },
  {
    image: images.hor5,
    title: "Vintage Round Neon Signs",
    subtitle: "Make a statement with retro neon & porcelain."
  },
  {
    image: images.hor2,
    title: "Heritage Button Signage",
    subtitle: "Classic designs built to last decades."
  },
  {
    image: images.hor8,
    title: "Custom Collector Pieces",
    subtitle: "From enamel buttons to large round signs."
  }
];

const HERO = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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
              fetchpriority={index === 0 ? "high" : undefined}
              loading={index === 0 ? undefined : "lazy"}
            />
            <div className="hero-shadow" />
            <div className="hero-content">
              {index === 0 ? <h1>{slide.title}</h1> : <h2>{slide.title}</h2>}
              <p>{slide.subtitle}</p>
              <Link to="/contact" className="hero-btn">
                Request a Free Quote
              </Link>
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