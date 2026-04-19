import React from 'react';
import { Helmet } from "react-helmet-async";
import HEAD2 from '../../components/common/HEAD2';
import WHY from '../../components/common/WHY';
import CTA2 from '../../components/common/CTA2';
import FAQ from '../../components/common/FAQ';
import CommonV1 from '../../components/common/CommonV1';
import CommonV from '../../components/common/CommonV';
import SeventyTwo from '../../components/common/SeventyTwo';
import CollageH from '../../components/common/CollageH';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Our Porcelain Sign Company | Classic Porcelain Signs</title>
        <meta
          name="description"
          content="Learn about Classic Porcelain Signs, experts in custom porcelain and enamel signage. We combine craftsmanship, durability, and design to create timeless signage."
        />
        <link rel="canonical" href="https://www.classicporcelainsigns.com/about" />
        <meta property="og:url" content="https://www.classicporcelainsigns.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Our Porcelain Sign Company | Classic Porcelain Signs" />
        <meta property="og:description" content="Learn about Classic Porcelain Signs, experts in custom porcelain and enamel signage." />
        <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/classicporcelainsigns.firebasestorage.app/o/images%2Flogoh.png?alt=media" />
      </Helmet>
      <HEAD2 />
      <WHY />
      <CollageH />
      <CommonV />
      <SeventyTwo />
      <CommonV1 />
      <CTA2 />
      <FAQ />
    </>
  );
};

export default About;