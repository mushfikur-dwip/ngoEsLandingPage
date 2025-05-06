import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, modernFadeUp } from "@/hooks/useScrollAnimation";
import pricingPlans from "../../src/data/PricingPlansData.json";

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
                        {pricingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.id}
                                ref={plan.title === "Basic" ? basicAnim.ref : plan.title === "Startup" ? startupAnim.ref : enterpriseAnim.ref}
                                initial="hidden"
                                animate={plan.title === "Basic" ? basicAnim.controls : plan.title === "Startup" ? startupAnim.controls : enterpriseAnim.controls}
                                variants={modernFadeUp}
                                className={`w-full flex-1 mt-8 p-8 order-${index + 1} bg-${plan.bgColor} shadow-xl rounded-3xl sm:w-96 lg:w-full`}
                            >
                                <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
                                    <img
                                        src={plan.image}
                                        alt=""
                                        className="rounded-3xl w-20 h-20"
                                    />
                                    <div className="ml-5">
                                        <span className={`block text-2xl font-semibold text-${plan.textColor}`}>{plan.title}</span>
                                        <span>
                                            <span className={`font-medium text-xl align-top text-${plan.textColor}`}>$&thinsp;</span>
                                            <span className={`text-3xl font-bold text-${plan.textColor}`}>{plan.price}</span>
                                        </span>
                                        <span className={`font-medium text-${plan.textColor}`}> / {plan.duration}</span>
                                    </div>
                                </div>

                                <ul className="mb-7 font-medium text-gray-500">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex text-lg mb-2">
                                            <img src={`https://res.cloudinary.com/williamsondesign/check-${plan.textColor === "white" ? "white" : "grey"}.svg`} alt="" />
                                            <span className="ml-3 text-black">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={plan.buttonLink}
                                    className="flex justify-center items-center bg-indigo-600 rounded-xl py-5 px-4 text-center text-white text-xl"
                                >
                                    {plan.buttonText}
                                    <img
                                        src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                                        className="ml-2"
                                        alt=""
                                    />
                                </a>
                            </motion.div>
                        ))}
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


            </motion.div>
            <div className="bg-[#EE2461] border border-[#ffff] rounded-3xl max-w-6xl mx-auto">
                <div className=" h-auto py-5 px-5 flex flex-col lg:flex-row lg:items-center lg:justify-around gap-6 items-center justify-center font-semibold text-4xl text-white">
                    <div className='flex  flex-col'>
                        <h1 className='text-[24px] lg:text-[44px] text-center lg:text-left'>Intake and Research</h1>
                        <p className='text-[16px] lg:text-[18px] text-center lg:text-left leading-tight font-normal'>Choose your package and fill out the intake form. We’ll gather all the details to research and script your video.</p>
                    </div>
                    <div><img width={150} src="https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c669f05faeb5e1b41f017_Our%20Process%2001.webp" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default PricingPlans;

