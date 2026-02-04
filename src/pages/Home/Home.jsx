import React, { useState, useEffect } from "react";
import HERO from '../../components/common/HERO'
import INTRO from '../../components/common/INTRO'
import GALLERYH from '../../components/common/GALLERYH'
import AdvCTA from '../../components/common/advcta'
import HomeService from '../../components/common/HomeService'
import GallerySection from '../../components/common/GallerySection'
import CTA2 from '../../components/common/CTA2'
import WITHCLASSIC from '../../components/common/WITHCLASSIC'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HERO />
      {!isMobile && <WITHCLASSIC />} {/* Hide on mobile only */}
      <INTRO />
      <GALLERYH />
      <HomeService />
      <CTA2 />
      <GallerySection />
      <AdvCTA />
    </>
  )
}

export default Home;