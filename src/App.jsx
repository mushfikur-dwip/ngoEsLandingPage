import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Brands from './components/Brand/Brands';
import OurServices from './components/Service/OurServices';
import OurWorks from './components/OurWork/OurWorks';
import OurProcess from './components/OurProcess/OurProcess';
import Pricing from './components/PricingPlans';
import Review from './components/Review/Review';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer';
import World from './components/World/WorldMap';

const App = () => {
  return (
    <>
      <div class="relative h-full  bg-slate-950"><div class="absolute bottom-0 left-[-10%] right-0 top-[-10%] h-[100vh]  rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[100vh]  rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
       
      
      
      
      <div className="bg-slate-950 px-2 lg:px-20" >
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Brands></Brands>
        <OurServices></OurServices>
        <OurWorks></OurWorks>
        <OurProcess></OurProcess>
        <Pricing></Pricing>
        <Review></Review>
        <Faq></Faq>
        <World></World>
        <Footer></Footer>
        
      </div>
    </>
  );
};

export default App;