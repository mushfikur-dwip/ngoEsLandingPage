import React from 'react';
import BrandBtn from '../BrandBtn';

const workProcessData = [
    {
        id: 1,
        name: "Intake and Research",
        description: "Choose your package and fill out the intake form. We’ll gather all the details to research and script your video.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp",
        zIndex: 10
    },
    {
        id: 2,
        name: "Script and Storyboard",
        description: "We create a script and storyboard for your video based on your needs and objectives.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp",
        zIndex: 20
    },
    {
        id: 3,
        name: "Production and Animation",
        description: "Our creative team brings your story to life with professional video production and animation.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp",
        zIndex: 30
    },
    {
        id: 4,
        name: "Delivery and Optimization",
        description: "We deliver the final video and assist you in optimizing it for maximum impact.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp",
        zIndex: 40
    }
];

const OurProcess = () => {
    return (
        <div className='py-5 max-w-[1600px] mx-auto px-5'>
            {/* Top Brand Button and Heading */}
            <div className="flex flex-col items-start gap-5">
                <div className='w-[150px]'>
                    <BrandBtn />
                </div>
                <h1 className="text-white font-bold text-5xl">
                    <span className="bg-gradient-to-r from-[#EE2461] to-[#fff] text-transparent bg-clip-text">
                        Professional Video
                    </span> Solutions for SaaS Success
                </h1>
            </div>

            {/* Work Process Section */}
            <div className="py-[4.375rem]">
                <div className="flex flex-col gap-y-[3rem] relative">
                    {workProcessData.map((process, zIndex) => (
                        <div
                            key={process.id}
                            className={`bg-[#EE2461] border border-[#ffff] rounded-3xl sticky top-[3.75rem] -z-${zIndex} ${process.zIndex} flex flex-col lg:flex-row items-center justify-center gap-6 py-5 lg:py-20 px-5`}
                            style={{ zIndex: process.zIndex }}
                        >
                            <div className="w-full h-auto py-5 lg:py-20 px-5 flex flex-col lg:flex-row lg:items-center lg:justify-around gap-6 items-center justify-center font-semibold text-4xl text-white">
                                <div className='flex flex-col pt-5'>
                                    <h2 className='text-[24px] lg:text-[44px] text-center lg:text-left'>
                                        {process.name}
                                    </h2>
                                    <p className='text-[16px] lg:text-[18px] text-center lg:text-left leading-tight font-normal mt-2'>
                                        {process.description}
                                    </p>
                                </div>
                                <div>
                                    <img width={100} src={process.img} alt={process.name} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurProcess;
