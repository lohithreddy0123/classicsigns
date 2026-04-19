import React from "react";
import "./INTRO.css";
import { images } from "../../assets/imageUrls";

const Intro = () => {
  return (
    <div id="introduction-section">
      <div className="introduction-text">
        <h2 className="main-headline">
          Classic Porcelain Enamel Signs
        </h2>
        <p>
          At Classic Porcelain Signs, we create custom porcelain signs and handcrafted enamel signage designed for durability, visual impact, and timeless appeal.
        </p>
        <p>
          From vintage porcelain signs to large 72-inch round displays, each piece is made using traditional techniques and premium materials to ensure long-lasting quality.
        </p>
        <p>
          We work with collectors, businesses, and brands worldwide to produce custom signage that stands out and lasts for generations.
        </p>
      </div>
      <div className="introduction-animation">
        <img
          src={images.round}
          alt="custom round porcelain sign"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Intro;