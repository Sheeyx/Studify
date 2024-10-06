import React from 'react';
import Header from './components/header';
import HeroSection from '../screens/home/HeroSection';
import WhyStudify from '../screens/home/WhyStudify';

function App() {
  return (
    <div>
      <Header />
        <HeroSection />
        <WhyStudify />
    </div>
  );
}

export default App;
