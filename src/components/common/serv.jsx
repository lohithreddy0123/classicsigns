import React, { useEffect, useRef } from "react";
import "./serv.css";

import porcelainVideo1 from "../../assets/videos/porcelain-signs1.mp4";
import porcelainVideo3 from "../../assets/videos/porcelain-signs3.mp4";

const Serv = () => {
  const slowVideoRef = useRef(null);
  const softVideoRef = useRef(null);

  useEffect(() => {
    if (slowVideoRef.current) slowVideoRef.current.playbackRate = 0.5;
    if (softVideoRef.current) softVideoRef.current.playbackRate = 0.75;
  }, []);

  return (
    <section id="services-overview">
      <h2>Our Porcelain Sign Services</h2>

      <div className="services-container">
        <div className="services-list">

          {/* First Video */}
          <div className="services-video">
            <video ref={slowVideoRef} autoPlay muted loop playsInline>
              <source src={porcelainVideo1} type="video/mp4" />
            </video>
          </div>

          {/* Service 1 */}
          <div className="service-item">
            <h3>Custom Porcelain Signs</h3>
            <p>✔ Hand-crafted, kiln-fired porcelain</p>
            <p>✔ Fully custom text, colors & layouts</p>
            <p>✔ Designed for durability and elegance</p>
          </div>

          {/* Service 2 */}
          <div className="service-item">
            <h3>House & Address Signs</h3>
            <p>✔ High-contrast house numbers</p>
            <p>✔ Weather-resistant enamel finish</p>
            <p>✔ Classic, timeless appearance</p>
          </div>

          {/* Second Video */}
          <div className="services-video">
            <video ref={softVideoRef} autoPlay muted loop playsInline>
              <source src={porcelainVideo3} type="video/mp4" />
            </video>
          </div>

          {/* Service 3 */}
          <div className="service-item">
            <h3>Business Signage</h3>
            <p>✔ Professional storefront branding</p>
            <p>✔ Custom logos and typography</p>
            <p>✔ Built for long-term outdoor use</p>
          </div>

          {/* Service 4 */}
          <div className="service-item">
            <h3>Vintage & Enamel Style</h3>
            <p>✔ Traditional enamel aesthetics</p>
            <p>✔ Perfect for cafés & studios</p>
            <p>✔ Authentic retro craftsmanship</p>
          </div>

          {/* Service 5 */}
          <div className="service-item">
            <h3>Outdoor Durability</h3>
            <p>✔ UV & fade resistant colors</p>
            <p>✔ Resistant to rain and frost</p>
            <p>✔ Long lifespan with minimal care</p>
          </div>

          {/* Service 6 */}
          <div className="service-item">
            <h3>Made to Order</h3>
            <p>✔ Each sign crafted individually</p>
            <p>✔ Attention to fine details</p>
            <p>✔ No mass production</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Serv;
