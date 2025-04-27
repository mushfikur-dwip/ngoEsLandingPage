import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

const App = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-auto w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </div>
    </>
  );
};

export default App;