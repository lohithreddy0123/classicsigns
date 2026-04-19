import React from "react";
import "./CommonV.css";
import { images } from "../../assets/imageUrls";

const CommonV = () => {
  return (
    <div className="common-v">
      <img
        src={images.collagev}
        alt="Collage V"
        className="common-image"
        loading="lazy"
      />
    </div>
  );
};

export default CommonV;