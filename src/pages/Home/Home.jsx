import React from 'react';
import './home.css';

import FAQ from '../../components/common/FAQ';
import CTA1 from '../../components/common/CTA1';
import WITHCLASSIC from '../../components/common/WITHCLASSIC'; // ✔ correct import

const Home = () => {
  return (
    <div className="home">

      {/* Hero / Video / Section */}
      <WITHCLASSIC />

      {/* CTA Section */}
      <CTA1 />

      {/* FAQ Section */}
      <FAQ />

    </div>
  );
};

export default Home;
