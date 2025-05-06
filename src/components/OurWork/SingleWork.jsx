import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, modernFadeUp, } from '../../hooks/useScrollAnimation';

export default function SingleWork({ work }) {
    const { ref, controls } = useScrollAnimation();
    console.log(work);
    return (
        <motion.div
            ref={ref}
            variants={modernFadeUp}
            initial="hidden"
            animate={controls}
            className="max-w-full space-y-4 rounded-3xl bg-white p-4 shadow-lg dark:bg-[#18181B] transition-all duration-500 hover:scale-[1.02]"
        >
            <div className="overflow-hidden rounded-2xl w-full aspect-video">
                <iframe
                    className="w-full h-full"
                    src={work.videoUrl}
                    title={work.company}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold"><a href={work.companyUrl}>{work.company}</a></h1>
                <p className="text-sm text-[#ee2461] dark:text-white/60">{work.projectCat}</p>
            </div>
        </motion.div>
    );
}
