import React, { useState } from 'react';

const PricingPlans = () => {
    const [isAnnual, setIsAnnual] = useState(true);
        
    const plans = [
        {
            name: 'Essential',
            length: '30 Seconds',
            priceAnnual: '29',
            priceMonthly: '35',
            features: [
                'Unlimited placeholder texts',
                'Consectetur adipiscing elit',
                'Excepteur sint occaecat cupidatat',
                'Officia deserunt mollit anim'
            ],
            
        },
        {
            name: 'Perform',
            length: '60 Seconds',
            priceAnnual: '49',
            priceMonthly: '55',
            features: [
                'Unlimited placeholder texts',
                'Consectetur adipiscing elit',
                'Excepteur sint occaecat cupidatat',
                'Officia deserunt mollit anim',
                'Predefined chunks as necessary'
            ],
            popular: true,
        },
        {
            name: 'Enterprise',
            length: '120 Seconds',
            priceAnnual: '79',
            priceMonthly: '85',
            features: [
                'Unlimited placeholder texts',
                'Consectetur adipiscing elit',
                'Excepteur sint occaecat cupidatat',
                'Officia deserunt mollit anim',
                'Predefined chunks as necessary',
                'Free from repetition'
            ],
        },
    ];
  
 
    return (
        <div className="relative font-inter antialiased">
            <main className="relative  flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                    <div>
                        <h1 className="text-white text-center mb-5 font-bold text-5xl lg:pr-[50px]">
                            <span className="bg-gradient-to-r from-[#EE2461] to-[#fff] text-transparent bg-clip-text">
                                Pricing Plans
                            </span> for Success
                        </h1>
                    </div>
                    <div>
                        {/* Pricing toggle */}
                        <div className="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-16">
                            <div className="relative flex w-full p-1 bg-[#ee2461]  rounded-full">
                                <span className="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                                    <span
                                        className={`absolute inset-0 w-1/2 bg-white rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? 'translate-x-0' : 'translate-x-full'}`}
                                    ></span>
                                </span>
                                <button
                                    className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-white  transition-colors duration-150 ease-in-out ${isAnnual ? 'text-[#ee2461]' : 'text-white'}`}
                                    onClick={() => setIsAnnual(true)}
                                    aria-pressed={isAnnual}
                                >
                                    Yearly  <span className={`${isAnnual ? 'text-[#ee2461]' : 'text-white dark:text-slate-500'}`}>-20%</span>
                                </button>
                                <button
                                    className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-white  transition-colors duration-150 ease-in-out ${isAnnual ? 'text-white' : 'text-[#ee2461]'}`}
                                    onClick={() => setIsAnnual(false)}
                                    aria-pressed={!isAnnual}
                                >
                                    Monthly
                                </button>
                            </div>
                        </div>

                        {/* Pricing Plans */}
                        <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
                            {plans.map((plan, index) => (
                                <div key={index} className="h-full">
                                    <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
                                        {plan.popular && (
                                            <div className="absolute top-0 right-0 mr-6 -mt-4">
                                                <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-[#ee2461] text-white rounded-full shadow-sm shadow-slate-950/5">
                                                    Most Popular
                                                </div>
                                            </div>
                                        )}
                                        <div className="mb-5">
                                            <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">{plan.name}</div>
                                            <div className="inline-flex items-baseline mb-2">
                                                <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
                                                <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{isAnnual ? plan.priceAnnual : plan.priceMonthly}</span>
                                                <span className="text-slate-500 font-medium"> / {plan.length}</span>
                                            </div>
                                            <div className="text-sm text-slate-500 mb-5">There are many variations available, but the majority have suffered.</div>
                                            <a
                                                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-[#ee2461] px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                                                href="#0"
                                            >
                                                Purchase Plan
                                            </a>
                                        </div>
                                        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
                                        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center">
                                                    <svg className="w-3 h-3 fill-[#ee2461] mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default PricingPlans;