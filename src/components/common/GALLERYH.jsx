import React, { useRef, useEffect } from "react";
import "./galleryh.css";

/* Horizontal (excluding hor1,2,3,5) */
import hor6 from "../../assets/images/hor6.jpg";
import hor7 from "../../assets/images/hor7.jpg";
import hor8 from "../../assets/images/hor8.jpg";
import hor9 from "../../assets/images/hor9.jpg";
import hor10 from "../../assets/images/hor10.jpg";
import hor11 from "../../assets/images/hor11.png";
import hor13 from "../../assets/images/hor13.png";

/* Vertical / Square */
import ver1 from "../../assets/images/ver1.png";
import ver12 from "../../assets/images/ver12.png";
import ver2 from "../../assets/images/ver2.jpg";
import ver3 from "../../assets/images/ver3.jpg";
import ver4 from "../../assets/images/ver4.png";
import ver5 from "../../assets/images/ver5.png";

/* Other */
import round from "../../assets/images/roundsigns.jpg";
import neon from "../../assets/images/neon-licence.jpg";
import logos from "../../assets/images/logos.jpg";

const images = [
  hor6,
  hor7,
  hor8,
  hor9,
  hor10,
  hor11,
  hor13,
  ver1,
  ver12,
  ver2,
  ver3,
  ver4,
  ver5,
  round,
  neon,
  logos,
];

const GalleryH = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -380 : 380,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const speed = 0.6; // noticeable but premium
    let animationFrame;

    const autoScroll = () => {
      if (!scrollRef.current) return;

      scrollRef.current.scrollLeft += speed;

      if (
        scrollRef.current.scrollLeft +
        scrollRef.current.clientWidth >=
        scrollRef.current.scrollWidth
      ) {
        scrollRef.current.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="gallery-section">
      <h2>Porcelain Signs</h2>

      <div className="gallery-shell">
        <button className="arrow left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="gallery-viewport">
          <div className="gallery-track" ref={scrollRef}>
            {images.map((img, i) => (
              <div className="gallery-card" key={i}>
                <img src={img} alt="Porcelain sign" />
              </div>
            ))}
          </div>
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
};

export default GalleryH;
