import React from "react";
import "./INTRO.css";
import roundImage from "../../assets/images/round.png"; // Updated to your image

const Intro = () => {
  return (
    <div id="introduction-section">
      <div className="introduction-text">
        <h1 className="main-headline">
          Classic Porcelain Enamel Signs
        </h1>
        <p>
          At Classic Porcelain Signs, we craft premium handcrafted porcelain enamel signs that blend vintage charm with lasting durability.
        </p>
        <p>
          Each custom enamel sign is weatherproof, fade-resistant, and made to stand out—perfect for adding timeless character to homes, businesses, and collector spaces.
        </p>
        <p>
          From retro porcelain buttons to oversized 72-inch round enamel signs, our creations are designed to make a bold statement and leave a lasting impression.
        </p>
      </div>

      <div className="introduction-animation">
        <img src={roundImage} alt="Round Porcelain Sign" />
      </div>
    </div>
  );
};

export default Intro;