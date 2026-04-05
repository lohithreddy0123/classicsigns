import "./BlackCollage.css";
import blackcollage from "../../assets/images/blackcollage.png";

const BlackCollage = () => {
  return (
    <section className="blackCollage">
      <div className="blackCollage-container">
        <img
          src={blackcollage}
          alt="custom porcelain signs collage"
          className="blackCollage-image"
        />
      </div>
    </section>
  );
};

export default BlackCollage;