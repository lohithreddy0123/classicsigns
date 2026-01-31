import React from 'react';
import './home.css';

import FAQ from '../../components/common/FAQ';
import CTA1 from '../../components/common/CTA1';
import WITHCLASSIC from '../../components/common/WITHCLASSIC'; // ✔ correct import
import AdvCTA from '../../components/common/advcta';
import HERO from '../../components/common/HERO';
import CTA2 from '../../components/common/CTA2';
import WHY from '../../components/common/WHY';
import HEAD from '../../components/common/HEAD';
import HEAD2 from '../../components/common/HEAD2';
import INTRO from '../../components/common/INTRO';
import SERV from '../../components/common/SERV';
import GALLERYH from '../../components/common/GALLERYH';


const Home = () => {
  return (
    <div className="home">

      <HERO />
      <HEAD2 />

      <INTRO />

      <AdvCTA />

      <WHY />
      <GALLERYH />

      {/* Hero / Video / Section */}
      <WITHCLASSIC />

      {/* CTA Section */}
      <CTA1 />
      <SERV />



      {/* FAQ Section */}
      <FAQ />
      <CTA2 />
      <HEAD />

    </div>
  );
};

export default Home;
