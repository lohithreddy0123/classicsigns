import React from "react";
import "./CommonV1.css";
import collageV1 from "../../assets/images/collagev1.png";

const CommonV1 = () => {
  return (
    <div className="common-v1">
      <img src={collageV1} alt="Collage V1" className="common-image" />
    </div>
  );
};

export default CommonV1;