import React from 'react';
import './home.css';
import FAQ from '../../components/common/FAQ';
import CTA1 from '../../components/common/CTA1';

const Home = () => {
  return (
    <div className="home-test">
      <h1>Home Page Loaded ✅</h1>
      <p>If you can see this, routing and CSS are working.</p>

      {/* CTA Section */}
      <CTA1 />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
