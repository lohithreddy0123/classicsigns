import React from "react";
import "./advcta.css";

const AdvCTA = () => {
  return (
    <section id="free-section">
      {/* Header */}
      <div className="free-header">
        <h2>Contact Classic Porcelain Signs</h2>
        <p>
          We craft high-quality porcelain and enamel signs. Reach out for custom designs, quotes, or any inquiries about our products.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="free-benefits">
        {/* India Phone */}
        <div className="benefit-item">
          <svg className="benefit-icon" viewBox="0 0 640 480">
            <rect width="640" height="480" fill="#fff" />
            <rect width="640" height="160" fill="#ff9933" />
            <rect y="320" width="640" height="160" fill="#138808" />
            <circle cx="320" cy="240" r="40" fill="#000088" />
          </svg>
          <div>
            <strong>Phone (India):</strong>
            <span>90631 43344</span>
            <p className="subtext">Call during business hours for inquiries or custom orders.</p>
          </div>
        </div>

        {/* US Phone */}
        <div className="benefit-item">
          <svg className="benefit-icon" viewBox="0 0 640 480">
            <rect width="640" height="480" fill="#b22234" />
            <g fill="#fff">
              {[...Array(9)].map((_, i) => (
                <rect key={i} y={i * 53.33 + 26.66} width="640" height="26.66" />
              ))}
            </g>
            <rect width="304" height="213.33" fill="#3c3b6e" />
          </svg>
          <div>
            <strong>Phone (US):</strong>
            <span>81001 10011</span>
            <p className="subtext">For international customers and inquiries.</p>
          </div>
        </div>

        {/* Email */}
        <div className="benefit-item">
          <svg className="benefit-icon" viewBox="0 0 24 24">
            <path fill="#00ffc1" d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
          <div>
            <strong>Email:</strong>
            <span>info@classicporcelainsigns.com</span>
            <p className="subtext">Send us an email for quotes, customization, or general questions.</p>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <a href="mailto:info@classicporcelainsigns.com" className="cta-button">
        Request Your Custom Sign
      </a>
    </section>
  );
};

export default AdvCTA;
