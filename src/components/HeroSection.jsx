import React from 'react';

const HeroSection = () => {
    return (
        <div className='flex flex-col px-2 py-10 lg:py-20'>
            <div className='flex flex-col items-center text-center  pb-2 '>
                <h1 className='text-[38px] text-white lg:text-6xl font-bold tracking-tight leading-10 lg:leading-15 px-10 lg:px-50'>SaaS Videos that <span className='text-[#EE2461]'> Educate,  Engage, and Convert.</span></h1>
            </div>
            <p className='text-center text-white lg:px-70'>Simplify complex concepts, showcase your product's value, and engage your audience with done-for-you video solutions.</p>
            <div className='flex gap-5 justify-center pt-4 lg:pb-5'>
                <button className="btn text-white rounded-full bg-[#ee2461] border-0 shadow ">Order Now</button>
                <button className="btn text-[#ee2461] rounded-full border-2 border-[#ee2461] shadow hover:text-white hover:bg-[#ee2461]">Set A Meeting</button>
            </div>

            <div className="overflow-hidden rounded-xl w-full lg:max-w-[1050px] mx-auto mt-5">
                <iframe
                    className="w-full h-60 lg:h-150 "
                    src="https://www.youtube.com/embed/XLb_bKDBLt0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

        </div>
    );
};

export default HeroSection;