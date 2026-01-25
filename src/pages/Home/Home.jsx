import React from 'react';
import './home.css';
import FAQ from '../../components/common/FAQ';  // if file is faq.jsx


const Home = () => {
  return (
    <div className="home-test">
      <h1>Home Page Loaded ✅</h1>
      <p>If you can see this, routing and CSS are working.</p>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Home;
