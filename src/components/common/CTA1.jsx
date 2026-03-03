import React from "react";
import { Link } from "react-router-dom";
import "./cta1.css";

import ver15 from "../../assets/images/ver15.png";

const CTA1 = () => {
  return (
    <section className="cta1-section">
      {/* IMAGE (replaces video) */}
      <div className="cta1-media">
        <img
          src={ver15}
          alt="Custom Porcelain Sign Visual"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* CONTENT */}
      <div className="cta1-content">
        <h2>Get Your Custom Porcelain Sign</h2>
        <p>
          At Classic Porcelain Signs, we craft handcrafted enamel signs — from vintage buttons
          to 72-inch round signage — designed to make a statement and last a lifetime.
        </p>

        <Link to="/contact" className="cta1-button">
          Request Your Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CTA1;
