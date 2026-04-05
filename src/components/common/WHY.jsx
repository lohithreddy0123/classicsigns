import React from 'react';
import './WHY.css';
import whyImg from '../../assets/images/WHY.jpg';

const Why = () => {
  return (
    <section className="why-section">

      <div className="why-card">
        <div className="why-image">
          <img src={whyImg} alt="custom porcelain signs and enamel signage examples" />
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

          <a href="/contact" className="why-btn">
            Start Your Custom Sign Project →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Why;