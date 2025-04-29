import React from 'react';
import { motion } from 'framer-motion';
import { modernFadeUp, useScrollAnimation } from '../hooks/useScrollAnimation';

const SingleService = () => {
    const { ref, controls } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            variants={modernFadeUp}
            initial="hidden"
            animate={controls}
            className='bg-amber-200 w-full rounded-xl px-15 py-18 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow duration-300'
        >
            <img
                src="https://cdn.prod.website-files.com/6641e53a27d5f5cb8a6deda4/671c65a5dd05a74a57565696_Animated_Explainer.webp"
                alt=""
                className="mb-4 rounded"
            />
            <h1 className='text-4xl font-bold tracking-tight mb-2'>Animated Explainer Videos</h1>
            <p className='text-base'>Engage your audience and simplify complex concepts with our animated explainer videos, tailored for SaaS businesses.</p>
        </motion.div>
    );
};

export default SingleService;
