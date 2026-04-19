import React from "react";
import "./CommonV1.css";
import { images } from "../../assets/imageUrls";

const CommonV1 = () => {
  return (
    <div className="common-v1">
      <img
        src={images.collagev1}
        alt="custom porcelain signs collage"
        className="common-image"
        loading="lazy"
      />
    </div>
  );
};

export default CommonV1;