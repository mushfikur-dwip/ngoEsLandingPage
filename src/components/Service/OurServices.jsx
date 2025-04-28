import React from 'react';
import SingleService from '../Service/SingleService';
import BrandBtn from '../BrandBtn';

const OurServices = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-4 px-2 max-w-[1400px] items-center mx-auto'>
            <div className='py-3 flex flex-col items-start'>
                <BrandBtn></BrandBtn>
                <h1 className='text-white font-bold text-5xl lg:pr-[50px]'><span className='bg-gradient-to-r from-[#EE2461] to-white text-transparent bg-clip-text'>Professional Video</span> Solutions for SaaS Success</h1>
            </div>
            <div><SingleService></SingleService></div>
            <div><SingleService></SingleService></div>
            <div><SingleService></SingleService></div>
        </div>

    );
};

export default OurServices;