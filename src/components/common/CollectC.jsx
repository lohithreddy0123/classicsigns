import "./CollectC.css";
import collectImage from "../../assets/images/collectimage.png";

const CollectC = () => {
  return (
    <section className="collectC">
      <div className="collectC-container">
        <img
          src={collectImage}
          alt="Collective signage showcase"
          className="collectC-image"
        />
      </div>
    </section>
  );
};

export default CollectC;