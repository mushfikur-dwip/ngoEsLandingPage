import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, modernFadeUp } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

const PricingPlans = () => {
    const basicAnim = useScrollAnimation();
    const startupAnim = useScrollAnimation();
    const enterpriseAnim = useScrollAnimation();

    return (
        <div>
            <div>
                <main className="max-w-6xl mx-auto pt-10 pb-10 px-8">
                    <div className=" mx-auto mb-14 text-center">
                        <h1 className="text-white font-bold text-4xl lg:text-6xl lg:pr-[50px]">
                            View Our <span className="text-[#EE2461]">Past Work</span>
                        </h1>
                        <p className="text-xl text-gray-500 font-medium">
                            Choose a plan that works best for you and your team.
                        </p>
                    </div>

                    <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
                        {/* Basic Plan */}
                        <motion.div
                            ref={basicAnim.ref}
                            initial="hidden"
                            animate={basicAnim.controls}
                            variants={modernFadeUp}
                            className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none"
                        >

                            <div className="w-full flex-1 mt-8 order-2 bg-white rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
                                <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                                        alt=""
                                        className="rounded-3xl w-20 h-20"
                                    />
                                    <div className="ml-5">
                                        <span className="block text-2xl font-semibold">Basic</span>
                                        <span>
                                            <span className="font-medium text-xl align-top text-black">$&thinsp;</span>
                                            <span className="text-3xl font-bold text-black">450 </span>
                                        </span>
                                        <span className="font-medium text-black"> / 60 Seconds</span>
                                    </div>
                                </div>
                                <ul className="mb-7 font-medium text-gray-500">
                                    <li className="flex text-lg mb-2">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                                        <span className="ml-3">
                                            We provide <span className="text-black">Script</span>
                                        </span>
                                    </li>
                                    <li className="flex text-lg mb-2">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                                        <span className="ml-3">
                                            We Provide <span className="text-black">Storyboard & Animatics</span>
                                        </span>
                                    </li>
                                    <li className="flex text-lg">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                                        <span className="ml-3">
                                            <span className="text-black">1 Professional</span>  Voice Over
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#/"
                                    className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
                                >
                                    Set A Meeting
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                        className="ml-2"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </motion.div>

                        {/* Startup Plan */}
                        <motion.div
                            ref={startupAnim.ref}
                            initial="hidden"
                            animate={startupAnim.controls}
                            variants={modernFadeUp}
                            className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-[#ee2461] text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0"
                        >

                            <div className="w-full flex-1  order-1 rounded-3xl bg-[#ee2461] text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
                                <div className="mb-8 pb-8 flex items-center border-b border-white">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                                        alt=""
                                        className="rounded-3xl w-20 h-20"
                                    />
                                    <div className="ml-5">
                                        <div>
                                            <span className="block text-3xl font-semibold text-white">Startup</span>
                                            <span>
                                                <span className="font-medium text-xl align-top text-white">$&thinsp;</span>
                                                <span className="text-3xl font-bold text-white">450 </span>
                                            </span>
                                            <span className="font-medium text-white"> / 60 Seconds</span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="mb-10 font-medium text-xl">
                                    <li className="flex mb-6">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                                        <span className="ml-3 text-white">
                                            All features in <span className="text-white font-bold">Basic</span>
                                        </span>
                                    </li>
                                    <li className="flex mb-6">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                                        <span className="ml-3 text-white">
                                            Flexible <span className="text-white">call scheduling</span>
                                        </span>
                                    </li>
                                    <li className="flex mb-6">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                                        <span className="ml-3 text-white">
                                            Flexible <span className="text-white">call scheduling</span>
                                        </span>
                                    </li>
                                    <li className="flex">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="" />
                                        <span className="ml-3 text-white">
                                            <span className="text-white">15 TB</span> cloud storage
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#/"
                                    className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white font-semibold text-lg lg:text-2xl"
                                >
                                    Set A Meeting
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                        className="ml-2"
                                        alt=""
                                    />
                                </a>
                            </div>

                        </motion.div>

                        {/* Enterprise Plan */}
                        <motion.div
                            ref={enterpriseAnim.ref}
                            initial="hidden"
                            animate={enterpriseAnim.controls}
                            variants={modernFadeUp}
                            className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none"
                        >

                            <div className="w-full flex-1 mt-8 order-3 bg-white  rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
                                <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                                        alt=""
                                        className="rounded-3xl w-20 h-20"
                                    />
                                    <div className="ml-5">
                                        <span className="block text-2xl font-semibold">Enterprise</span>
                                        <span>
                                            <span className="font-medium text-xl align-top text-black">$&thinsp;</span>
                                            <span className="text-3xl font-bold text-black">450 </span>
                                        </span>
                                        <span className="font-medium text-black"> / 60 Seconds</span>
                                    </div>
                                </div>
                                <ul className="mb-7 font-medium text-gray-500">
                                    <li className="flex text-lg mb-2">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                                        <span className="ml-3">
                                            All features in <span className="text-black">Startup</span>
                                        </span>
                                    </li>
                                    <li className="flex text-lg mb-2">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                                        <span className="ml-3">
                                            Growth <span className="text-black">oriented</span>
                                        </span>
                                    </li>
                                    <li className="flex text-lg">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                                        <span className="ml-3">
                                            <span className="text-black">Unlimited</span> cloud storage
                                        </span>
                                    </li>
                                    <li className="flex text-lg">
                                        <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="" />
                                        <span className="ml-3">
                                            <span className="text-black">Unlimited</span> cloud storage
                                        </span>
                                    </li>
                                </ul>
                                <a
                                    href="#/"
                                    className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-lg">Set A Meeting
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                        className="ml-2"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </main>
            </div>
            
            
            <motion.div
                ref={basicAnim.ref}
                initial="hidden"
                animate={basicAnim.controls}
                variants={modernFadeUp}
                className="-my-4"
            >
            
                <div className="bg-[#EE2461] border border-[#ffff] rounded-3xl max-w-6xl mx-auto">
                    <div className=" h-auto py-5 px-5 flex flex-col lg:flex-row lg:items-center lg:justify-around gap-6 items-center justify-center font-semibold text-4xl text-white">
                        <div className='flex  flex-col'>
                            <h1 className='text-[24px] lg:text-[44px] text-center lg:text-left'>Intake and Research</h1>
                            <p className='text-[16px] lg:text-[18px] text-center lg:text-left leading-tight font-normal'>Choose your package and fill out the intake form. We’ll gather all the details to research and script your video.</p>
                        </div>
                        <div><img width={150} src="https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp" alt="" /></div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PricingPlans;

