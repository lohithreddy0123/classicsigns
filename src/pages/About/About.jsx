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