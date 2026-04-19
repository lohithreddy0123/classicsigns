import "./NeonC.css";
import { images } from "../../assets/imageUrls";

const NeonC = () => {
  return (
    <section className="neonC">
      <div className="neonC-container">
        <img
          src={images.neonh}
          alt="custom neon and signage display"
          className="neonC-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default NeonC;