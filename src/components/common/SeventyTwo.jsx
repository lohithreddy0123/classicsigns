import "./SeventyTwo.css";
import seventyTwoImg from "../../assets/images/72.png";

const SeventyTwo = () => {
  return (
    <section className="seventyTwo">
      <div className="seventyTwo-container">

        {/* Image */}
        <div className="seventyTwo-imageBox">
          <img src={seventyTwoImg} alt="72 inch porcelain sign" />
        </div>

        {/* Content */}
        <div className="seventyTwo-content">
          <span className="badge">Signature Series</span>

          <h2>
            72” Rare <br /> Porcelain Signs
          </h2>

          <p className="lead">
            A format few can manufacture. Even fewer can perfect.
          </p>

          <p>
            Our <strong>72-inch porcelain signs</strong> represent the highest
            level of craftsmanship we offer. Produced using traditional
            porcelain enameling techniques, each sign is engineered for
            permanence, depth, and unmistakable presence.
          </p>

          <p>
            This size is one of our defining USPs — rare, bold, and built for
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