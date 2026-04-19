import { Link } from 'react-router-dom';
import './HEAD2.css';

const Head2 = () => {
  return (
    <section className="head2">
      <div className="head2-inner">
        {/* LEFT — BIG 4-LINE HEADING */}
        <div className="head2-heading">
          <span>Know</span>
          <span>Classic,</span>
          <span>what we</span>
          <span>stand for.</span>
        </div>
        {/* RIGHT — SMALL TEXT */}
        <div className="head2-text">
          <span className="head2-logo">CLASSIC PORCELAIN SIGNS</span>
          <h2>Premium Porcelain & Enamel Signage</h2>
          <p>
            Classic Porcelain Signs creates high-quality porcelain enamel signage with a focus on durability, design, and authentic craftsmanship. From custom buttons to oversized 72-inch round signs, each piece is made to stand out and last for years.
          </p>
          <Link to="/contact">Get Your Free Quote →</Link>
        </div>
      </div>
    </section>
  );
};

export default Head2;