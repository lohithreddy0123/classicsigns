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
          alt="Brand growth visual"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* CONTENT */}
      <div className="cta1-content">
        <h2>Ready to Grow Your Brand?</h2>
        <p>
          See how we transform businesses with smart strategy,
          clean design, and measurable growth.
        </p>

        <Link to="/Contact" className="cta1-button">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTA1;
