import React from "react";
import "./CollageH.css";
import collageH from "../../assets/images/collageh.png";

const CollageH = () => {
  return (
    <div className="collage-h">
      <img
        src={collageH}
        alt="custom porcelain signs collage"
        className="common-image"
      />
    </div>
  );
};

export default CollageH;