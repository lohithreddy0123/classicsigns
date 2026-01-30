import React, { useEffect, useRef, useState } from "react";
import "./gal.css";

/* Horizontal (allowed) */
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

const IMAGE_POOL = [
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

const GRID_SIZE = 16;

const Gal = () => {
  const [gridImages, setGridImages] = useState(
    IMAGE_POOL.slice(0, GRID_SIZE)
  );

  const usedIndexes = useRef(new Set());

  useEffect(() => {
    const interval = setInterval(() => {
      const tileIndex = Math.floor(Math.random() * GRID_SIZE);

      let newImage;
      do {
        newImage =
          IMAGE_POOL[Math.floor(Math.random() * IMAGE_POOL.length)];
      } while (gridImages.includes(newImage));

      setGridImages((prev) => {
        const updated = [...prev];
        updated[tileIndex] = newImage;
        return updated;
      });
    }, 3200); // premium timing

    return () => clearInterval(interval);
  }, [gridImages]);

  return (
    <section id="shuffle-gallery">
      <h2>Porcelain Signs</h2>

      <div className="shuffle-grid">
        {gridImages.map((img, idx) => (
          <div className="shuffle-tile" key={idx}>
            <img src={img} alt="Porcelain sign" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gal;
