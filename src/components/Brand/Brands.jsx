import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Brands.css';
import logos from '../../data/logos'; 

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
    // Check the first logo alt text
    return (
        <>
            <motion.div
                ref={leftRef}
                variants={slideFromLeft}
                initial="hidden"
                animate={leftControls}
                className="wrapper"
            >
                {
                    logos.map((logo, index) => (
                        <div key={`left-${index}`} className={`itemLeft item${index + 1} rounded-2xl`}>
                            <img src={logo.url} key={logo.id} alt={''} className="logo" />
                            </div>
                    ))
                }

            </motion.div>

            <motion.div
                ref={rightRef}
                variants={slideFromRight}
                initial="hidden"
                animate={rightControls}
                className="wrapper"
            >
                {
                    logos.map((logo, index) => (
                        <div key={`right-${index}`} className={`itemRight item${index + 1}`}>
                            <img src={logo.url} key={logo.id} alt={''} className="logo" />
                        </div>
                    ))
                }
            </motion.div>
        </>
    );
    
};

export default Brands;
