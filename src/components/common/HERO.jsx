import React, { useState, useEffect, useRef } from 'react';
import './HERO.css';

import hor1 from '../../assets/images/hor1.png';
import hor5 from '../../assets/images/hor5.png';
import hor2 from '../../assets/images/hor2.png';
import hor3 from '../../assets/images/hor3.png';

const slides = [
  {
    image: hor1,
    title: "Grow Your Brand",
    subtitle: "Smart strategy, clean design, measurable results."
  },
  {
    image: hor5,
    title: "Reach New Heights",
    subtitle: "Empower your business with our expertise."
  },
  {
    image: hor2,
    title: "Transform Your Vision",
    subtitle: "Turning ideas into success stories."
  },
  {
    image: hor3,
    title: "Innovate & Inspire",
    subtitle: "Stay ahead with modern solutions."
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
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
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
              <a href="#contact" className="hero-btn">Contact Us</a>
            </div>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${currentIndex === idx ? 'active' : ''}`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default HERO;
