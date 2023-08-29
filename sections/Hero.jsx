'use client';

import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Hero = () => (
 
  <section className="py-6 px-16 lg:max-w-[1280px] w-full mt-12 mx-auto">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className='2xl:max-w-[1280px] w-fullmx-auto flex flex-col'
      >
    <div className="flex justify-between max-lg:flex-col items-center ">
      <motion.h1 variants={textVariant(0.5)}>
      <div className="text-[50px] text-slate-900 font-medium">Want anything to be <br />
        easy with <span className="font-bold text-[50px] text-black">LaslesVPN.</span>
        <p className="text-xl mt-[20px] text-gray-600">
          Provide a network for all your needs with ease and fun using <span className="font-bold text-black">LaslesVPN</span> <br />
          discover interesting features from us.
        </p>
        <button className="mt-[50px] ransition ease-in-out delay-150 rounded-[10px] hover:-translate-y-1 hover:scale-110 duration-300 border-red-500 l border text-base font-bold bg-red-500 shadow-red-500/50 text-white px-[62px] py-4  shadow-lg">
          Get Started
        </button>
        

      </div>
      </motion.h1>
      <motion.div variants={textVariant(0.5)}>
      <img src="./illustration 1.png" alt="illustration" className="flex max-lg:justify-center items-center object-contain mt-12" />
      </motion.div>


    </div>
    </motion.div>

  </section>
 
);

export default Hero;
