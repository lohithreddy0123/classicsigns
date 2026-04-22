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
  "custom porcelain sign",
  "vintage enamel sign",
  "72 inch porcelain sign",
  "round porcelain sign",
  "collector porcelain sign",
  "custom enamel sign",
  "porcelain advertising sign",
  "handcrafted porcelain sign",
  "retro enamel sign",
  "custom round porcelain sign",
  "large porcelain sign",
  "classic enamel signage",
  "porcelain button sign",
  "round sign collection",
  "neon sign display",
  "custom logo sign",
];

const GalleryH = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  // 🔥 load few first, rest later (no UI change)
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
      <h2>Featured Porcelain Sign Projects</h2>

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
                  alt={altTexts[i] || "custom porcelain sign"}
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