// hooks/useScrollAnimation.js
import { useRef, useEffect } from "react";
import { useAnimation, useInView } from "framer-motion";

export const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return { ref, controls };
};

export const modernFadeUp = {
  hidden: { opacity: 0, y: 60, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1], // smooth spring feel
    },
  },
};
export const modernFadeLeft = {
  hidden: { opacity: 0, x: -60, scale: 0.98 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.2, 0.8, 0.2, 1], // smooth spring feel
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
