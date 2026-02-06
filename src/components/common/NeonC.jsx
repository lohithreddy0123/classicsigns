import "./NeonC.css";
import neonh from "../../assets/images/neonh.png";

const NeonC = () => {
  return (
    <section className="neonC">
      <div className="neonC-container">
        <img
          src={neonh}
          alt="Neon signs collage"
          className="neonC-image"
        />
      </div>
    </section>
  );
};

export default NeonC;