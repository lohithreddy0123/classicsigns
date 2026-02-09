import "./USPartner.css";
import uspartner from "../../assets/images/uspartner.jpg";

const USPartner = () => {
  return (
    <section className="us-partner-section">
      <div className="us-partner-container">
        <h2 className="us-partner-title">Meet Our U.S. Partner</h2>

        <img
          src={uspartner}
          alt="Chris Harris"
          className="us-partner-image"
        />

        <h3 className="us-partner-name">TY HUFFER</h3>

        <p className="us-partner-desc">
          A trusted part of our porcelain signs brand, closely connected with our
          clients and our long-standing commitment to craftsmanship and quality.
        </p>

        <div className="us-partner-contact">
          <span>📞 +1 816 261 5697</span>
          <span>✉️ tyhuffer@gmail.com</span>
        </div>
      </div>
    </section>
  );
};

export default USPartner;