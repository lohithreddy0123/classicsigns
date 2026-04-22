import React, { useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
// import HERO from "../../components/common/HERO";
// import INTRO from "../../components/common/INTRO";
// import GALLERYH from "../../components/common/GALLERYH";
// import AdvCTA from "../../components/common/ADVCTA";
// import HomeService from "../../components/common/HomeService";
// import GallerySection from "../../components/common/GallerySection";
// import USPartner from "../../components/common/USPartner";

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
          content="Custom porcelain signs and enamel signage handcrafted for durability and timeless appeal."
        />
      </Helmet>

      <Suspense fallback={<div style={{ minHeight: "700px" }} />}>
        <WITHCLASSIC />
      </Suspense>
    </>
  );
};

export default Home;