import React from 'react';
import { Link } from 'react-router-dom';
import './WHY.css';
import { images } from '../../assets/imageUrls';

const Why = () => {
  return (
    <section className="why-section">
      <div className="why-card">
        <div className="why-image">
          <img
            src={images.why}
            alt="custom porcelain signs and enamel signage examples"
            loading="lazy"
          />
        </div>
        <div className="why-content">
          <p>
            We create <strong>custom porcelain signs</strong> and
            <strong> enamel signage</strong> — including
            <strong> round signs</strong>, <strong>die cut signs</strong>,
            <strong> press signs</strong>, <strong>thermometers</strong>, and
            large <strong>72-inch displays</strong> built for lasting impact worldwide.
          </p>
          <ul className="why-features">
            <li><span className="icon">📏</span> 72-inch round signs & large-format displays</li>
            <li><span className="icon">🎨</span> Custom die cut signs, buttons & flanges</li>
            <li><span className="icon">🌦️</span> Weather-resistant press signs & thermometers</li>
            <li><span className="icon">💡</span> Glass globe, spinners & neon signage</li>
            <li><span className="icon">🌍</span> Worldwide manufacturing & delivery</li>
          </ul>
          <Link to="/contact" className="why-btn">
            Start Your Custom Sign Project →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Why;