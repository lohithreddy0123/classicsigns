import React from "react";
import "./CollageH.css";
import { images } from "../../assets/imageUrls";

const CollageH = () => {
  return (
    <div className="collage-h">
      <img
        src={images.collageh}
        alt="custom porcelain signs collage"
        className="common-image"
        loading="lazy"
      />
    </div>
  );
};

export default CollageH;