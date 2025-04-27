import React from 'react';

const Brands = () => {
    return (
        <>
            <div className="overflow-hidden py-5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-center text-lg font-semibold text-white">
                        Trusted by the world’s most innovative teams
                    </h2>

                    {/* Left to Right Scroll */}
                    <div className="relative mt-10 w-full overflow-hidden">
                        <div className="flex w-max animate-[scroll-right_20s_linear_infinite] gap-12">
                            {[...Array(2)].map((_, index) => (
                                <div key={index} className="flex items-center gap-12">
                                    <img
                                        alt="Transistor"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="Reform"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="Tuple"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="SavvyCal"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="Statamic"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden py-5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Right to Left Scroll */}
                    <div className="relative w-full overflow-hidden">
                        <div className="flex w-max animate-[scroll-left_20s_linear_infinite] gap-12">
                            {[...Array(2)].map((_, index) => (
                                <div key={index} className="flex items-center gap-12">
                                    <img
                                        alt="Transistor"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="Reform"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="Tuple"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="SavvyCal"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                    <img
                                        alt="Statamic"
                                        src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                                        className="max-h-12 w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Brands;