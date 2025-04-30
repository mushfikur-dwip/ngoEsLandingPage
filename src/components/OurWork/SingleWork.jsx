import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, modernFadeUp,  } from '../../hooks/useScrollAnimation';

export default function SingleWork() {
    const { ref, controls } = useScrollAnimation();

    return (
        <motion.div
            ref={ref}
            variants={modernFadeUp}
            initial="hidden"
            animate={controls}
            className="max-w-full space-y-4 rounded-3xl bg-white p-4 shadow-lg dark:bg-[#18181B] transition-all duration-500 hover:scale-[1.02]"
        >
            <div className="overflow-hidden rounded-xl w-full">
                <iframe
                    className="w-full h-60 lg:h-100"
                    src="https://www.youtube.com/embed/XLb_bKDBLt0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold"><a href="http://google.com">Brac Limited</a></h1>
                <p className="text-sm text-[#ee2461] dark:text-white/60">Animation Explainer Video</p>
            </div>
        </motion.div> 
    );
}
