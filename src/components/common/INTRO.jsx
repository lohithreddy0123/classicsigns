import React from "react";
import "./intro.css";
import porcelainVideo from "../../assets/videos/porcelain-signs.mp4"; // Optional video of your signs

const Intro = () => {
  return (
    <div id="introduction-section">
      <div className="introduction-text">
        <h1 className="main-headline">Porcelain Signs - Elegant & Durable</h1>
        <p>We craft premium porcelain signs that combine elegance with durability.</p>
        <p>
          Our signs are perfect for businesses, homes, and decorative projects, providing a timeless look
          that stands the test of time.
        </p>
        <p>
          Whether you're looking for a custom address plaque or a unique decorative sign, our porcelain
          creations are designed to leave a lasting impression.
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
