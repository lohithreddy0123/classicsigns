import React, { useEffect, useState } from "react";
import "./GallerySection.css";
import { images } from "../../assets/imageUrls";

const allPorcelainImages = [
  images.hor1,
  images.hor2,
  images.hor6,
  images.hor7,
  images.hor8,
  images.hor9,
  images.ver1,
  images.ver4,
  images.ver12,
  images.ver15,
];

const altTexts = [
  "custom porcelain sign",
  "vintage enamel sign",
  "72 inch porcelain sign",
  "collector porcelain sign",
  "custom enamel sign",
  "porcelain advertising sign",
  "handcrafted porcelain sign",
  "retro enamel signage",
  "custom round porcelain sign",
  "large porcelain display sign",
];

const GalleryPorcelain = () => {
  const [lightbox, setLightbox] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [porcelainImages, setPorcelainImages] = useState(allPorcelainImages.slice(0, 4));

  useEffect(() => {
    const timer = setTimeout(() => {
      setPorcelainImages(allPorcelainImages);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
      <h2 className="gallery-title">Explore Our Custom Porcelain Sign Collection</h2>

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
              width="800"
              height="1000"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 900px) 50vw, 25vw"
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
            width="1200"
            height="1500"
            decoding="async"
          />
          <span className="lightbox-close">&times;</span>
        </div>
      )}
    </section>
  );
};

export default GalleryPorcelain;