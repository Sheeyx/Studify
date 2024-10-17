import React from 'react';
import Header from './components/header';
import HeroSection from '../screens/home/HeroSection';
import WhyStudify from '../screens/home/WhyStudify';
import HowWorks from '../screens/home/HowWorks';
import AboutCompany from '../screens/home/AboutCompany';
import PricePackage from '../screens/home/PricePackage';
import OurResults from '../screens/home/OurResults';

function App() {
  return (
    <div>
      <Header />
        <HeroSection />
        <WhyStudify />
        <HowWorks />
        <AboutCompany/>
        <PricePackage/>
        <OurResults/>
    </div>
  );
}

export default App;
