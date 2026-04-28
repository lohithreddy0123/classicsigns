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
        <title>Classic Porcelain Signs | Custom Porcelain & Enamel Signage</title>
        <meta
          name="description"
          content="Classic Porcelain Signs crafts custom porcelain enamel signs and handcrafted enamel signage built for durability, timeless appeal, and worldwide delivery."
        />
        <link rel="canonical" href="https://www.classicporcelainsigns.com/" />

        <meta property="og:url" content="https://www.classicporcelainsigns.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Classic Porcelain Signs" />
        <meta
          property="og:title"
          content="Classic Porcelain Signs | Custom Porcelain & Enamel Signage"
        />
        <meta
          property="og:description"
          content="Classic Porcelain Signs crafts custom porcelain enamel signs and handcrafted enamel signage built for durability, timeless appeal, and worldwide delivery."
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
              "Classic Porcelain Signs crafts custom porcelain enamel signs and handcrafted enamel signage for businesses, collectors, and brands worldwide.",
            image:
              "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images-new%2Flogoh.webp?alt=media",
            logo:
              "https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images-new%2Flogoh.webp?alt=media",
            priceRange: "$$",
            telephone: "+919820577396",
            email: "info@classicporcelainsigns.com",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN",
            },
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