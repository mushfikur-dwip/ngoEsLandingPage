import React from 'react';
import SingleReview from './SingleReview';
import { motion } from 'framer-motion';
import BrandBtn from '../BrandBtn';
import { useScrollAnimation, staggerContainer, modernFadeLeft } from '../../hooks/useScrollAnimation';

const Review = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <>
            <motion.div
                ref={ref}
                variants={staggerContainer}
                initial="hidden"
                animate={controls}
                className='py-10 max-w-[1600px] mx-auto'
            >
                <motion.div variants={modernFadeLeft} className='py-10 flex flex-col items-start'>
                    <BrandBtn />
                    <h1 className='text-white font-bold text-6xl lg:pr-[50px]'>
                        View Our <span className='text-[#ee2461]'>Past Work</span>
                    </h1>
                </motion.div>
                <div className='w-1/2'>
                    <div className='border-red-100'>
                        <p>asdfas</p>
                    </div>
                </div>

            </motion.div>
            <div className='w-1/2 grid grid-cols-1 '>
                <SingleReview></SingleReview>
                <SingleReview></SingleReview>
                <SingleReview></SingleReview>
                <SingleReview></SingleReview>
            </div>
            <p>test</p>
        </>
    );
};

export default Review;