import React from 'react';
import './why.css';
import whyImg from '../../assets/images/why.jpg';

const Why = () => {
  return (
    <section className="why-section">

      <div className="why-card">
        <div className="why-image">
          <img src={whyImg} alt="Why Choose Us" />
        </div>
        <div className="why-content">
          <p>
            We specialize in <strong>classic porcelain enamel signs</strong>,
            including large 72-inch vintage pieces and fully customized designs.
            Built to last for decades and delivered worldwide.
          </p>
          <ul className="why-features">
            <li><span className="icon">📏</span> 72-inch large vintage signs</li>
            <li><span className="icon">🎨</span> Custom-made designs</li>
            <li><span className="icon">🌦️</span> Weather-resistant enamel finish</li>
            <li><span className="icon">🌍</span> International delivery available</li>
          </ul>
          <a href="contact" className="why-btn">Let’s Connect</a>
        </div>
      </div>
    </section>

  );
};

export default Why;
