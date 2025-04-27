import React from 'react';

const Navbar = () => {
    return (
        <div className='mb-10'>
            <div>
                <div className="navbar bg-transparent backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 lg:px-10 md:px-5 sm:px-3">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="text-[#EE2461] mr-3 cursor-pointer  lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                            >
                                <li><a>Service</a></li>
                                <li><a>Our Work</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Templates</a></li>
                                <li>
                                    <details>
                                        <summary>More</summary>
                                        <ul className="p-2">
                                            <li><a>About us</a></li>
                                            <li><a>Blog</a></li>
                                            <li><a>Resources</a></li>
                                        </ul>
                                    </details>
                                </li>
                            </ul>
                        </div>
                        <a className="text-xl font-bold text-white">EndingScene <span className='text-[#EE2461] text-5xl absolute top-0 left-47.8 lg:left-42' >.</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-white">
                            <li className=''><a>Service</a></li>
                            <li className=''><a>Our Work</a></li>
                            <li className=''><a>Pricing</a></li>
                            <li className=''><a>Templates</a></li>
                            <li className=''>
                                <details>
                                    <summary>More</summary>
                                    <ul className="p-2 text-black">
                                        <li><a>About us</a></li>
                                        <li><a>Blog</a></li>
                                        <li><a>Resources</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Set A Meeting</a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;