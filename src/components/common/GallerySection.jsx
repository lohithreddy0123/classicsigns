import React, { useState } from "react";
import "./GallerySection.css";
import { images } from "../../assets/imageUrls";

const porcelainImages = [
  images.hor1, images.hor2, images.hor5, images.hor6, images.hor7,
  images.hor8, images.hor9, images.ver1, images.ver4, images.ver12, images.ver15
];

const altTexts = [
  "custom porcelain sign",
  "vintage enamel sign",
  "round porcelain sign",
  "72 inch porcelain sign",
  "collector porcelain sign",
  "custom enamel sign",
  "porcelain advertising sign",
  "handcrafted porcelain sign",
  "retro enamel signage",
  "custom round porcelain sign",
  "large porcelain display sign"
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
      <h2 className="gallery-title">Featured Porcelain Sign Projects</h2>
      <div className="porcelain-grid">
        {porcelainImages.map((img, index) => (
          <div
            className="porcelain-card"
            key={index}
            onClick={() => openLightbox(img)}
          >
            <img
              src={img}
              alt={altTexts[index] || "custom porcelain sign"}
              className="porcelain-image"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
      {lightbox && (
        <div className="lightbox" onClick={closeLightbox}>
          <img
            src={currentImg}
            alt="porcelain sign preview"
            className="lightbox-img"
          />
          <span className="lightbox-close">&times;</span>
        </div>
      )}
    </section>
  );
};

export default GalleryPorcelain;