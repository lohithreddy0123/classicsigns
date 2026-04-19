import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import "./HERO.css";
import { images } from "../../assets/imageUrls";

const slides = [
  {
    image: images.hor1,
    title: "72-Inch Round Porcelain Signs",
    subtitle: "Custom enamel buttons & round signage for collectors.",
  },
  {
    image: images.hor5,
    title: "Vintage Round Neon Signs",
    subtitle: "Make a statement with retro neon & porcelain.",
  },
  {
    image: images.hor2,
    title: "Heritage Button Signage",
    subtitle: "Classic designs built to last decades.",
  },
  {
    image: images.hor8,
    title: "Custom Collector Pieces",
    subtitle: "From enamel buttons to large round signs.",
  },
];

const HERO = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const currentSlide = useMemo(() => slides[currentIndex], [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const distance = touchStartX.current - touchEndX.current;

    if (distance > 50) {
      goToNext();
    } else if (distance < -50) {
      goToPrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      className="hero-carousel"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero carousel"
    >
      <div className="hero-slide active">
        <div className="hero-image-wrapper">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="hero-image"
            width="1920"
            height="500"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />

          <div className="hero-shadow" />

          <div className="hero-content">
            {currentIndex === 0 ? (
              <h1>{currentSlide.title}</h1>
            ) : (
              <h2>{currentSlide.title}</h2>
            )}
            <p>{currentSlide.subtitle}</p>
            <Link to="/contact" className="hero-btn">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`dot ${currentIndex === idx ? "active" : ""}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HERO;