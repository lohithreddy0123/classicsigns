import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import HERO from '../../components/common/HERO'
import INTRO from '../../components/common/INTRO'
import GALLERYH from '../../components/common/GALLERYH'
import AdvCTA from '../../components/common/ADVCTA'
import HomeService from '../../components/common/HomeService'
import GallerySection from '../../components/common/GallerySection'
import CTA2 from '../../components/common/CTA2'
import WITHCLASSIC from '../../components/common/WITHCLASSIC'
import USPartner from '../../components/common/USPartner'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Helmet>
        <title>Custom Porcelain Signs | Enamel Signage Experts</title>
        <meta
          name="description"
          content="Custom porcelain signs and enamel signage handcrafted for durability and timeless appeal. Vintage designs, 72-inch round signs, and worldwide delivery available."
        />
      </Helmet>

      <HERO />
      {!isMobile && <WITHCLASSIC />}
      <INTRO />
      <GALLERYH />
      <HomeService />
      <USPartner />
      <GallerySection />
      <AdvCTA />
    </>
  )
}

export default Home;