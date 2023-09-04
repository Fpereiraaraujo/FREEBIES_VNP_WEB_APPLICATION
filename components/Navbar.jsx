'use client';

import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'>
    <nav className="mx-auto xl:max-w-[1280px] w-full py-16 px-16 sm:py-6 sm:px-16 ">
      <div className="flex items-center justify-between gap-8">
        <img src="./logo (1).png " alt="logo" className="h-[36px] w-[149px]" />
        <div className=" flex flex-col gap-8">
          <ul className="  max-lg:hidden flex itens-center justify-between gap-8">
            <a href="#About">About</a>
            <a href="#Features">Features</a>
            <a href="#Pricing">Pricing</a>
            <a href="#Testimonials">Testimonials</a>
            <a href="#Help">Help</a>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-bold text-black cursor-pointer">Sign In</p>
          <button className="font-bold text-red-500 border-red-500 rounded-[50px] border py-2 px-8">Sign Up</button>
        </div>
      </div>
    </nav>
  </motion.nav>
);
export default Navbar;
