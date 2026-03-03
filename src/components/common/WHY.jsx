import React from 'react';
import './WHY.css';
import whyImg from '../../assets/images/WHY.jpg';

const Why = () => {
  return (
    <section className="why-section">

      <div className="why-card">
        <div className="why-image">
          <img src={whyImg} alt="Round Signs, Die Cut Signs, Press Signs and Glass Globe" />
        </div>
        <div className="why-content">
          <p>
            We craft <strong>classic porcelain enamel signs</strong> — including 
            <strong> round signs</strong>, <strong>die cut signs</strong>, 
            <strong> press signs</strong>, <strong>thermometers</strong>, and 
            large <strong>flanges 72</strong> built for lasting impact worldwide.
          </p>

          <ul className="why-features">
            <li><span className="icon">📏</span> 72-inch round signs & flanges 72 displays</li>
            <li><span className="icon">🎨</span> Custom die cut signs, buttons & flanges</li>
            <li><span className="icon">🌦️</span> Weather-resistant press signs & thermometers</li>
            <li><span className="icon">💡</span> Glass globe, spinners & neon skins</li>
            <li><span className="icon">🌍</span> Worldwide manufacturing & delivery</li>
          </ul>

          <a href="contact" className="why-btn">
            Start Your Custom Sign Project →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Why;