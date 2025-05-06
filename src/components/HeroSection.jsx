import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

// container with staggered children
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

// fade and float up with slight scale
const fadeInUp = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.2, 0.8, 0.2, 1],
        },
    },
};

const HeroSection = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="flex flex-col px-2 py-10 lg:pt-4 lg:py-20"
        >
            {/* Heading */}
            <motion.div
                variants={fadeInUp}
                className="flex flex-col items-center text-center pb-4"
            >
                <h1 className="text-[38px] text-white lg:text-7xl font-bold tracking-tight leading-10 lg:leading-[70px] px-6 lg:px-24">
                    Tell Stories That Inspire <br /> Action Through<span className="text-[#EE2461]"><br className="hidden lg:block" />  Documentary & Animation.</span>
                </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
                variants={fadeInUp}
                className="text-center text-white max-w-3xl mx-auto px-4"
            >
                From impact documentaries to training animations, we help NGOs like BRAC and CARE Bangladesh communicate with empathy, clarity, and purpose.
            </motion.p>

            {/* Buttons */}
            <motion.div
                variants={fadeInUp}
                className="flex gap-5 justify-center pt-6 lg:pt-10"
            >
                <motion.button
                    className="btn text-white rounded-full bg-[#ee2461] border-0 shadow px-6 py-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                   View Our Works
                </motion.button>
                <motion.button
                    className="btn text-[#ee2461] rounded-full border-2 border-[#ee2461] shadow hover:text-white hover:bg-[#ee2461] px-6 py-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Set A Meeting
                </motion.button>
            </motion.div>

            {/* Video Dialog */}
            <motion.div
                variants={fadeInUp}
                className="w-full lg:max-w-[1500px] mx-auto mt-10"
            >
                <HeroVideoDialog
                    className="block dark:hidden"
                    animationStyle="from-center"
                    videoSrc="https://fast.wistia.net/embed/iframe/7izyf2evo2"
                    thumbnailSrc="https://embed-ssl.wistia.com/deliveries/3e9b85f90594bbce87bc37e20eb3b068c0443d9a.jpg?image_resize=960"
                    thumbnailAlt="Video Thumbnail"
                />
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;
