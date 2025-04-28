import React from 'react';
import BrandBtn from '../BrandBtn';
import SingleWork from './SingleWork';

const OurWorks = () => {
    return (
        <div className='py-10 max-w-[1600px] mx-auto'>
            <div className='py-10 flex flex-col items-start'>
                <BrandBtn></BrandBtn>
                <h1 className='text-white font-bold text-6xl lg:pr-[50px]'>View Our <span className='text-[#ee2461]'>Past Work</span></h1>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-9'>
                <SingleWork></SingleWork>
                <SingleWork></SingleWork>
                <SingleWork></SingleWork>
                <SingleWork></SingleWork>
            </div>
        </div>
    );
};

export default OurWorks;