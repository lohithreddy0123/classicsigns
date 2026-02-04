import React from 'react';
import HEAD2 from '../../components/common/HEAD2';
import WHY from '../../components/common/WHY';
import CTA2 from '../../components/common/CTA2';
import FAQ from '../../components/common/FAQ';

import CommonV1 from '../../components/common/CommonV1';
import CommonV from '../../components/common/CommonV';
import CollageH from '../../components/common/CollageH';

const About = () => {
  return (
    <>
      <HEAD2 />


      <CollageH />
      <WHY />
      {/* Mobile only */}
      <CommonV1 />


      {/* Desktop only */}


      <CTA2 />
      <CommonV />
      <FAQ />
    </>
  );
};

export default About;