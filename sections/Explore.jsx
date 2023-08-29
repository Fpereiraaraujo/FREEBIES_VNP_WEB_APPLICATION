'use client';

import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../utils/motion";

const Explore = () => (
  <section className=" mx-auto px-16 lg:max-w-[1280px] w-full md:px-16 md:py-16 ">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>
      <div className="flex justify-between max-lg:flex-col items-center lg:flex-row-reverse">
        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
          <div>
            <h1 className="text-[35px] text-black font-bold">
              We Provide Many <br />
              Features You Can Use
            </h1>
            <p className="text-gray-600 font-normal text-base mt-2">
              You can explore the features that we provide with fun <br />
              and have their own functions each feature.
            </p>
            <div className="flex flex-col mt-4 ">
              <ul className="flex items-center gap-4  mt-4">
                <img src="./Group 1120.png" alt="group" className="object-contain " />
                <p className="text-gray-600 font-normal text-base ">Powerfull online protection.</p>
              </ul>
              <ul className="flex items-center gap-4 mt-4">
                <img src="./Group 1120.png" alt="group" className="object-contain " />
                <p className="text-gray-600 font-normal text-base ">Internet without borders.</p>
              </ul>
              <ul className="flex items-center gap-4 mt-4">
                <img src="./Group 1120.png" alt="group" className="object-contain " />
                <p className="text-gray-600 font-normal text-base ">Supercharged VPN</p>
              </ul>
              <ul className="flex items-center gap-4 mt-4">
                <img src="./Group 1120.png" alt="group" className="object-contain " />
                <p className="text-gray-600 font-normal text-base ">No specific time limits.</p>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
          <img src="illustration 2.png" alt="illustration2" className="w-[508px] h-[414px] object-contain " />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Explore;
