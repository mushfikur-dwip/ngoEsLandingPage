import React from 'react';

const workProcessData = [
    {
        id: 1,
        name: "Intake and Research",
        description: "Choose your package and fill out the intake form. We’ll gather all the details to research and script your video.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp"
    },
    {
        id: 2,
        name: "Script and Storyboard",
        description: "We create a script and storyboard for your video based on your needs and objectives.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp"
    },
    {
        id: 3,
        name: "Production and Animation",
        description: "Our creative team brings your story to life with professional video production and animation.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp"
    },
    {
        id: 4,
        name: "Delivery and Optimization",
        description: "We deliver the final video and assist you in optimizing it for maximum impact.",
        img: "https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp"
    }
];

const OurProcess = () => {
    return (
        <div className='py-10 max-w-[1600px] mx-auto'>
            <h1 className="text-white font-bold text-5xl lg:pr-[50px]">
                <span className="bg-gradient-to-r from-[#EE2461] to-[#fff] text-transparent bg-clip-text">
                    Professional Video
                </span> Solutions for SaaS Success
            </h1>
            <div className="py-[4.375rem]">
                <div className="flex flex-col gap-y-[5rem] relative">

                    {/* এখানে মেপ করে নিচ্ছি */}
                    {workProcessData.map((process, index) => (
                        <div
                            key={process.id}
                            className={`bg-[#EE2461] border border-[#ffff] rounded-3xl min-h-[1rem] sticky top-[3.75rem] z-${10 + index * 10}`}
                        >
                            <div className="w-full h-auto py-20 px-5 flex flex-col lg:flex-row lg:items-center lg:justify-around gap-6 items-center justify-center font-semibold text-4xl text-white">
                                <div className='flex flex-col'>
                                    <h1 className='text-[24px] lg:text-[44px] text-center lg:text-left'>
                                        {process.name}
                                    </h1>
                                    <p className='text-[16px] lg:text-[18px] text-center lg:text-left leading-tight font-normal'>
                                        {process.description}
                                    </p>
                                </div>
                                <div>
                                    <img width={150} src={process.img} alt={process.name} />
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
