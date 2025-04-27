import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Brands from './components/Brands';
import OurServices from './components/OurServices';
import SingleService from './components/SingleService';

const App = () => {
  return (
    <>
      <div class="bg-slate-900 px-2" >
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <OurServices></OurServices>
      </div>
    </>
  );
};

export default App;