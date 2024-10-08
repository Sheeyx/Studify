import React from 'react';
import Header from './components/header';
import HeroSection from '../screens/home/HeroSection';
import WhyStudify from '../screens/home/WhyStudify';
import HowWorks from '../screens/home/HowWorks';
import AboutCompany from '../screens/home/AboutCompany';

function App() {
  return (
    <div>
      <Header />
        <HeroSection />
        <WhyStudify />
        <HowWorks />
        <AboutCompany/>
    </div>
  );
}

export default App;
