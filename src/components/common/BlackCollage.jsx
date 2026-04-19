import "./BlackCollage.css";
import { images } from "../../assets/imageUrls";

const BlackCollage = () => {
  return (
    <section className="blackCollage">
      <div className="blackCollage-container">
        <img
          src={images.blackcollage}
          alt="custom porcelain signs collage"
          className="blackCollage-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default BlackCollage;