import React from "react";
import { motion } from "framer-motion";
import BrandBtn from "../BrandBtn";
import SingleService from "./SingleService";
import {
  useScrollAnimation,
  modernFadeUp,
  staggerContainer,
  modernFadeLeft,
} from "../../hooks/useScrollAnimation";

import services from "../../data/service.json";

const OurServices = () => {
  const { ref, controls } = useScrollAnimation();
  // console.log(services);
  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
      className="grid lg:grid-cols-2 gap-4 px-2 max-w-[1400px] items-center mx-auto"
    >
      <motion.div
        variants={modernFadeLeft}
        className="py-3 flex flex-col items-start"
      >
        <BrandBtn />
        <h1 className="text-white  font-bold text-5xl lg:pr-[50px]">
          <span className="bg-gradient-to-r from-[#EE2461] to-white text-transparent bg-clip-text">
            Professional Video
          </span>{" "}
          Solutions for Success
        </h1>
      </motion.div>
      {/* Dynamic services rendering */}

      {services
        .filter((service) => service.status === "active")
        .map((service, id) => (
          <motion.div
            key={service.id}
            variants={modernFadeUp}
            className="flex flex-col items-start"
          >
            <SingleService service={service} />
          </motion.div>
        ))}
    </motion.div>
  );
};

export default OurServices;
