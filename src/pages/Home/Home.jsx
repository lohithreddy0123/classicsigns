import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import HERO from "../../components/common/HERO";
import INTRO from "../../components/common/INTRO";
import GALLERYH from "../../components/common/GALLERYH";
import AdvCTA from "../../components/common/ADVCTA";
import HomeService from "../../components/common/HomeService";
import GallerySection from "../../components/common/GallerySection";
import USPartner from "../../components/common/USPartner";

const WITHCLASSIC = lazy(() => import("../../components/common/WITHCLASSIC"));

const Home = () => {
  useEffect(() => {
    window.prerenderReady = true;
  }, []);

  return (
    <>
      <Helmet>
        <title>Custom Porcelain Signs | Enamel Signage Experts</title>
        <meta
          name="description"
          content="Custom porcelain signs and enamel signage handcrafted for durability and timeless appeal. Vintage designs, 72-inch round signs, and worldwide delivery available."
        />
        <link rel="canonical" href="https://www.classicporcelainsigns.com/" />
        <meta property="og:url" content="https://www.classicporcelainsigns.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Custom Porcelain Signs | Enamel Signage Experts"
        />
        <meta
          property="og:description"
          content="Custom porcelain signs and enamel signage handcrafted for durability and timeless appeal."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images-new%2Flogoh.webp?alt=media"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Classic Porcelain Signs",
            url: "https://www.classicporcelainsigns.com",
            description:
              "Custom handcrafted porcelain enamel signs for businesses and collectors.",
            image:
              "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images-new%2Flogoh.webp?alt=media",
            priceRange: "$$",
            telephone: "+91 98205 77396",
          })}
        </script>
      </Helmet>

      <HERO />

      <div className="desktop-only-home-section">
        <Suspense fallback={<div style={{ minHeight: "700px" }} />}>
          <WITHCLASSIC />
        </Suspense>
      </div>

      <INTRO />
      <GALLERYH />
      <HomeService />
      <USPartner />
      <GallerySection />
      <AdvCTA />
    </>
  );
};

export default Home;