import React from "react";
import "./intro.css";
import porcelainVideo from "../../assets/videos/porcelain-signs.mp4"; // Optional video of your signs

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
        <video autoPlay loop muted>
          <source src={porcelainVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Intro;
