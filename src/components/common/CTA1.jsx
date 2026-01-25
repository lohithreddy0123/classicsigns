import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './cta1.css';

import video1 from '../../assets/videos/OIG1.86iV_yWJV.c8.mp4';
import video2 from '../../assets/videos/OIG2 (1).mp4';
import video3 from '../../assets/videos/OIG4 (2).mp4';

const videos = [video1, video2, video3];

const CTA1 = () => {
  const videoRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVideoEnd = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <section className="cta1-section">
      <div className="cta1-video">
        <video
          ref={videoRef}
          src={videos[currentIndex]}
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      </div>

      <div className="cta1-content">
        <h2>Ready to Grow Your Brand?</h2>
        <p>
          See how we transform businesses with smart strategy,
          clean design, and measurable growth.
        </p>

        <Link to="/Call" className="cta1-button">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CTA1;
