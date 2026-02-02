import React, { useRef, useEffect, useState } from "react";
import "./galleryh.css";

/* Images */
import hor6 from "../../assets/images/hor6.jpg";
import hor7 from "../../assets/images/hor7.jpg";
import hor8 from "../../assets/images/hor8.jpg";
import hor9 from "../../assets/images/hor9.jpg";
import hor10 from "../../assets/images/hor10.jpg";
import hor11 from "../../assets/images/hor11.jpg";
import hor13 from "../../assets/images/hor13.jpg";

import ver1 from "../../assets/images/ver1.png";
import ver12 from "../../assets/images/ver12.jpg";
import ver2 from "../../assets/images/ver2.jpg";
import ver3 from "../../assets/images/ver3.jpg";
import ver4 from "../../assets/images/ver4.jpg";
import ver5 from "../../assets/images/ver5.jpg";

import round from "../../assets/images/roundsigns.jpg";
import neon from "../../assets/images/neon-licence.jpg";
import logos from "../../assets/images/logos.jpg";

const images = [
  hor6, hor7, hor8, hor9, hor10, hor11, hor13,
  ver1, ver12, ver2, ver3, ver4, ver5,
  round, neon, logos,
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

    interval = setInterval(autoScroll, 20); // smooth + light CPU

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
      <h2>Porcelain Signage</h2>

      <div className="gallery-shell">
        <button className="arrow left" onClick={() => scroll("left")}>‹</button>

        <div className="gallery-viewport">
          <div
            className="gallery-track"
            ref={scrollRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {images.map((img, i) => (
              <div className="gallery-card" key={i}>
                <img
                  src={img}
                  alt="Porcelain sign"
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
