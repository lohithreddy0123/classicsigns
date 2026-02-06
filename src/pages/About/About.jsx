import React from 'react';
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
      <HEAD2 />

      <WHY />
      <CollageH />
      <CommonV />
      <SeventyTwo />

      {/* Mobile only */}
      <CommonV1 />


      {/* Desktop only */}


      <CTA2 />

      <FAQ />
    </>
  );
};

export default About;