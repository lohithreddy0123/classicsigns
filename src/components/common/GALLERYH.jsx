import React, { useRef, useEffect, useState } from "react";
import "./GALLERYH.css";
import { images as imgs } from "../../assets/imageUrls";

const allImages = [
  imgs.hor6,
  imgs.hor7,
  imgs.hor8,
  imgs.hor9,
  imgs.hor10,
  imgs.hor11,
  imgs.hor13,
  imgs.ver1,
  imgs.ver12,
  imgs.ver2,
  imgs.ver3,
  imgs.ver4,
  imgs.ver5,
  imgs.roundsigns,
  imgs.neonLicence,
  imgs.logos,
];

const altTexts = [
  "Custom porcelain sign project by Classic Porcelain Signs",
  "Vintage enamel sign by Classic Porcelain Signs",
  "72 inch porcelain sign by Classic Porcelain Signs",
  "Round porcelain sign by Classic Porcelain Signs",
  "Collector porcelain sign by Classic Porcelain Signs",
  "Custom enamel sign by Classic Porcelain Signs",
  "Porcelain advertising sign by Classic Porcelain Signs",
  "Handcrafted porcelain sign by Classic Porcelain Signs",
  "Retro enamel sign by Classic Porcelain Signs",
  "Custom round porcelain sign by Classic Porcelain Signs",
  "Large porcelain sign by Classic Porcelain Signs",
  "Classic enamel signage by Classic Porcelain Signs",
  "Porcelain button sign by Classic Porcelain Signs",
  "Round sign collection by Classic Porcelain Signs",
  "Neon sign display by Classic Porcelain Signs",
  "Custom logo sign by Classic Porcelain Signs",
];

const GalleryH = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const [galleryImages, setGalleryImages] = useState(allImages.slice(0, 6));

  useEffect(() => {
    const timer = setTimeout(() => {
      setGalleryImages(allImages);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (paused) return;

      el.scrollLeft += 1;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
        el.scrollLeft = 0;
      }
    }, 20);

    const handleVisibility = () => {
      if (document.hidden) {
        setPaused(true);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [paused]);

  return (
    <section id="gallery-section">
      <h2>Featured Classic Porcelain Signs Projects</h2>

      <div className="gallery-shell">
        <button
          type="button"
          className="arrow left"
          onClick={() => scroll("left")}
          aria-label="Scroll gallery left"
        >
          ‹
        </button>

        <div className="gallery-viewport">
          <div
            className="gallery-track"
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {galleryImages.map((img, i) => (
              <div className="gallery-card" key={i}>
                <img
                  src={img}
                  alt={altTexts[i] || "Custom porcelain sign by Classic Porcelain Signs"}
                  width="260"
                  height="340"
                  loading="lazy"
                  decoding="async"
                  sizes="260px"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="arrow right"
          onClick={() => scroll("right")}
          aria-label="Scroll gallery right"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default GalleryH;