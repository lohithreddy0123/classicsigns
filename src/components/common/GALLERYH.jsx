import React, { useRef, useEffect, useState } from "react";
import "./GALLERYH.css";
import { images as imgs } from "../../assets/imageUrls";

const galleryImages = [
  imgs.hor6, imgs.hor7, imgs.hor8, imgs.hor9, imgs.hor10, imgs.hor11, imgs.hor13,
  imgs.ver1, imgs.ver12, imgs.ver2, imgs.ver3, imgs.ver4, imgs.ver5,
  imgs.roundsigns, imgs.neonLicence, imgs.logos,
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

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let interval;
    const autoScroll = () => {
      if (!scrollRef.current || paused) return;
      const el = scrollRef.current;
      el.scrollLeft += 1;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
        el.scrollLeft = 0;
      }
    };
    interval = setInterval(autoScroll, 20);
    const handleVisibility = () => {
      if (document.hidden) setPaused(true);
      else setPaused(false);
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
        <button className="arrow left" onClick={() => scroll("left")}>‹</button>
        <div className="gallery-viewport">
          <div
            className="gallery-track"
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {galleryImages.map((img, i) => (
              <div className="gallery-card" key={i}>
                <img
                  src={img}
                  alt={altTexts[i] || "custom porcelain sign"}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right" onClick={() => scroll("right")}>›</button>
      </div>
    </section>
  );
};

export default GalleryH;