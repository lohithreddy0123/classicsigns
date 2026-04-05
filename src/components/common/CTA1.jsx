import React from "react";
import { Link } from "react-router-dom";
import "./cta1.css";

import ver15 from "../../assets/images/ver15.png";

const CTA1 = () => {
  return (
    <section className="cta1-section">
      {/* IMAGE */}
      <div className="cta1-media">
        <img
          src={ver15}
          alt="custom porcelain sign design"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* CONTENT */}
      <div className="cta1-content">
        <h2>Get Your Custom Porcelain Sign</h2>
        <p>
          At Classic Porcelain Signs, we create custom porcelain signs and enamel signage — from vintage buttons to 72-inch round designs — built to stand out and last for years.
        </p>

        <Link to="/contact" className="cta1-button">
          Request a Free Quote
        </Link>
      </div>
    </section>
  );
};

export default CTA1;