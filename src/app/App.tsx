import React from 'react';
import Header from './components/header';
import HeroSection from '../screens/home/HeroSection';
import WhyStudify from '../screens/home/WhyStudify';
import HowWorks from '../screens/home/HowWorks';

function App() {
  return (
    <div>
      <Header />
        <HeroSection />
        <WhyStudify />
        <HowWorks />
    </div>
  );
}

export default App;
