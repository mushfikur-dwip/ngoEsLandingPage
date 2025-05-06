import React from 'react';
import { motion } from 'framer-motion';
import { modernFadeUp, useScrollAnimation } from '../hooks/useScrollAnimation';

const SingleService = ({service}) => {
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
                src={service.image}
                alt={service.name}
                className="mb-4 rounded"
            />
            <h1 className='text-4xl font-bold tracking-tight mb-2'>{service.name}</h1>
            <p className='text-base'>{service.description}</p>
        </motion.div>
    );
};

export default SingleService;
