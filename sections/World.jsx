'use client';

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const World = () => (
  <section className="px-6 py-6 md:px-16 md:py-16 mx-auto w-full lg:max-w-[1280px]">
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>

      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
        <div className="flex justify-center gap-4 max-lg:hidden">
          <img src="./Sponsored.png" alt="Sponsored" className=" object-contain" />

        </div>
      </motion.div>
    </motion.div>

  </section>
);

export default World;
