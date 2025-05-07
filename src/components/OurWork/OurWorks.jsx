import React from 'react';
import { motion } from 'framer-motion';
import BrandBtn from '../BrandBtn';
import SingleWork from './SingleWork';
import { useScrollAnimation, modernFadeUp, staggerContainer, modernFadeLeft } from '../../hooks/useScrollAnimation';
import work from '../../data/work.json';


const OurWorks = () => {
    const { ref, controls } = useScrollAnimation();
    // console.log(work);

    return (
        <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className='py-10 max-w-[1600px] mx-auto'
        >
            <motion.div variants={modernFadeLeft} className='py-10 flex flex-col items-start'>
                <BrandBtn />
                <h1 className='text-white font-bold text-5xl lg:pr-[50px]'>
                    View Our <span className='text-[#ee2461]'>Past Work</span>
                </h1>
            </motion.div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-9'>
                {/* <motion.div variants={modernFadeUp}><SingleWork /></motion.div> */}
                {
                    work.filter((work) => work.status === "completed").map((work) => (
                        <motion.div variants={modernFadeUp} key={work.id}>
                            <SingleWork work={work} />
                        </motion.div>
                    ))
                }

            </div>
        </motion.div>
    );
};

export default OurWorks;
