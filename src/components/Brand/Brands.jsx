import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Brands.css';

const slideFromLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
    },
};

const slideFromRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }
    },
};

const Brands = () => {
    const { ref: leftRef, controls: leftControls } = useScrollAnimation();
    const { ref: rightRef, controls: rightControls } = useScrollAnimation();

    return (
        <>
            <motion.div
                ref={leftRef}
                variants={slideFromLeft}
                initial="hidden"
                animate={leftControls}
                className="wrapper"
            >
                {[...Array(8)].map((_, index) => (
                    <div key={`left-${index}`} className={`itemLeft item${index + 1}`}></div>
                ))}
            </motion.div>

            <motion.div
                ref={rightRef}
                variants={slideFromRight}
                initial="hidden"
                animate={rightControls}
                className="wrapper"
            >
                {[...Array(8)].map((_, index) => (
                    <div key={`right-${index}`} className={`itemRight item${index + 1}`}></div>
                ))}
            </motion.div>
        </>
    );
};

export default Brands;
