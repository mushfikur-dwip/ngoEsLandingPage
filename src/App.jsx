import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Brands from './components/Brand/Brands';
import OurServices from './components/Service/OurServices';
import OurWorks from './components/OurWork/OurWorks';
import OurProcess from './components/OurProcess/OurProcess';
import Pricing from './components/PricingPlans';

const App = () => {
  return (
    <>
      <div class="bg-gradient-to-t from-[#0f172a]  to-[#334155] px-2" >
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <OurServices></OurServices>
        <OurWorks></OurWorks>
        <OurProcess></OurProcess>
        <Pricing></Pricing>

      </div>
    </>
  );
};

export default App;