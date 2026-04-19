import "./SeventyTwo.css";
import { images } from "../../assets/imageUrls";

const SeventyTwo = () => {
  return (
    <section className="seventyTwo">
      <div className="seventyTwo-container">
        {/* Image */}
        <div className="seventyTwo-imageBox">
          <img
            src={images.signs72}
            alt="72 inch custom porcelain sign"
            loading="lazy"
          />
        </div>
        {/* Content */}
        <div className="seventyTwo-content">
          <span className="badge">Signature Series</span>
          <h2>
            72" Rare <br /> Porcelain Signs
          </h2>
          <p className="lead">
            A format few can produce. Even fewer can perfect.
          </p>
          <p>
            Our <strong>72-inch custom porcelain signs</strong> represent the highest
            level of craftsmanship we offer. Produced using traditional
            porcelain enameling techniques, each sign is built for durability,
            depth, and strong visual presence.
          </p>
          <p>
            This size is one of our defining strengths — rare, bold, and made for
            collectors, brands, and spaces that demand distinction.
          </p>
          <p className="shipping">
            Designed & crafted in-house · <strong>Worldwide delivery available</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SeventyTwo;