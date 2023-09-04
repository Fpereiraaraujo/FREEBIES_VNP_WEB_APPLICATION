'use client';
import { motion } from "framer-motion";
import { fadeIn,staggerContainer } from "../utils/motion";



const WhatsNew = () => (
  <section className="px-6 md:px-16 py-6 md:py-6  mx-auto w-full lg:max-w-[1280px]">
 <motion.div variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}>
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-[35px] text-center font-bold text-slate-900">
      Huge Global Network <br />
      of Fast VPN
      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
      <p className="mt-4 text-gray-600 text-base font-medium leading-[30px]">
      
      See LaslesVPN everywhere to make it easier for you when you move <br />
      locations.
      </p>
      </motion.div>
      <motion.div variants={fadeIn('left', 'tween', 0.2, 1)}>
      <div className="relative mt-6">
        <img src="./Huge Global.png" alt="huge" className="w-full h-full object-cover" />
      </div>
    
      </motion.div>
      </h1>
      

    </div>
    
    </motion.div>
  </section>
);

export default WhatsNew;
