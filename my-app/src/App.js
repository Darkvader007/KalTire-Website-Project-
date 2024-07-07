// src/App.js
import React from 'react';
import NavBar from './components/navBar/navBar';
import HeroSection from './components/hero/heroSection';
import PromotionSection from './components/PromotionSection/promotionSection';
import ResourcesSection from './components/resourceSection/resourceSection';
import Footer from './components/footerSection/footerSection';


function App() {
  return (
    <div className="App">
      <NavBar />

      <HeroSection />

      <PromotionSection />

      <ResourcesSection />

      <Footer/>

      
    </div>

    
  );
}

export default App;
