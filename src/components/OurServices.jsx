import React from 'react';
import SingleService from './SingleService';

const OurServices = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-4 px-2 max-w-[1400px] items-center mx-auto'>
            <div className='py-3 flex flex-col items-start'>
                <div id='titelBtn' className="px-3 py-2 mb-3 text-[#ee2461] rounded-full border-2 border-[#ee2461] shadow hover:text-white hover:bg-[#ee2461]">Our service</div>
                
                <h1 className='text-white font-bold text-5xl lg:pr-[50px]'><span className='text-[#ee2461]'>Professional Video</span> Solutions for SaaS Success</h1>

            </div>
            <div><SingleService></SingleService></div>
            <div><SingleService></SingleService></div>
            <div><SingleService></SingleService></div>
        </div>

    );
};

export default OurServices;