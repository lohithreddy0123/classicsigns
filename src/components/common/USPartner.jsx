import "./USPartner.css";
import uspartner from "../../assets/images/uspartner.jpg";

const USPartner = () => {
  return (
    <section className="us-partner-section">
      <div className="us-partner-container">
        <h2 className="us-partner-title">Our U.S. Partner</h2>

        <img
          src={uspartner}
          alt="US porcelain sign partner"
          className="us-partner-image"
        />

        <h3 className="us-partner-name">TY HUFFER</h3>

        <p className="us-partner-desc">
          Our U.S. partner helps us stay closely connected with customers while maintaining our commitment to craftsmanship, quality, and reliable service.
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