import React from 'react';
import SingleReview from './SingleReview';
import { motion } from 'framer-motion';
import BrandBtn from '../BrandBtn';
import { useScrollAnimation, staggerContainer, modernFadeLeft } from '../../hooks/useScrollAnimation';
import reviews from '../../data/reviews.json';

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
                
                <div className='w-full grid grid-cols-1 lg:grid-cols-4 gap-5 '>
                    {reviews.map((review, index) => (
                        <SingleReview key={index} {...review} />
                    ))}
                </div>

            </motion.div>
            
         </>
    );
};

export default Review;