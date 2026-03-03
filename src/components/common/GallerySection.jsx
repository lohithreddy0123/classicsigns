import React, { useState } from "react";
import "./GallerySection.css";

// Import your porcelain images
import hor1 from "../../assets/images/hor1.png";
import hor2 from "../../assets/images/hor2.png";
import hor5 from "../../assets/images/hor5.png";
import hor6 from "../../assets/images/hor6.jpg";
import hor7 from "../../assets/images/hor7.jpg";
import hor8 from "../../assets/images/hor8.jpg";
import hor9 from "../../assets/images/hor9.jpg";
import ver1 from "../../assets/images/ver1.png";
import ver4 from "../../assets/images/ver4.jpg";
import ver12 from "../../assets/images/ver12.jpg";
import ver15 from "../../assets/images/ver15.png";

const porcelainImages = [
  hor1, hor2, hor5, hor6, hor7, hor8, hor9, ver1, ver4, ver12, ver15
];

const GalleryPorcelain = () => {
  const [lightbox, setLightbox] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);

  const openLightbox = (img) => {
    setCurrentImg(img);
    setLightbox(true);
  };

  const closeLightbox = () => {
    setLightbox(false);
    setCurrentImg(null);
  };

  return (
    <section className="gallery-porcelain">
      <h2 className="gallery-title">Timeless Porcelain</h2>
      <div className="porcelain-grid">
        {porcelainImages.map((img, index) => (
          <div
            className="porcelain-card"
            key={index}
            onClick={() => openLightbox(img)}
          >
            <img src={img} alt={`Porcelain ${index}`} className="porcelain-image" />
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={currentImg} alt="Preview" className="lightbox-img" />
          <span className="lightbox-close">&times;</span>
        </div>
      )}
    </section>
  );
};

export default GalleryPorcelain;