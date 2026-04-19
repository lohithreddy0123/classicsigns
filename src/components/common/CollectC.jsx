import "./CollectC.css";
import { images } from "../../assets/imageUrls";

const CollectC = () => {
  return (
    <section className="collectC">
      <div className="collectC-container">
        <img
          src={images.collectimage}
          alt="custom porcelain signs showcase"
          className="collectC-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default CollectC;