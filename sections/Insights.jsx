'use client';
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
const Insights = () => (
  <section className="px-6 py-6 md:px-16 md:py-16 mx-auto w-full lg:max-w-[1280px]">
    <motion.div variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}>

      <motion.div variants={fadeIn('right', 'tween', 0.2, 1)}>
        <div className="flex flex-col lg:max-flex-row justify-center">
          <h1 className="text-slate-900 text-[35px] font-bold text-center ">
            Trusted by Thousands of <br />
            Happy Customer
          </h1>
          <p className="text-center text-gray-600 text-base font-normal mt-4">
            These are the stories of our customers who have joined us with great <br />
            pleasure when using this crazy feature.
          </p>

          <div className="grid grid-cols-3 gap-4 mt-12 cursor-pointer max-lg:grid-rows-3 max-lg:flex max-lg:flex-col max-lg:px-32 ">
            <div className="border-2 rounded-md pb-16  hover:border-red-500  duration-500 ">
              <div className="flex flex-col mx-4 my-4">
                <div className="flex gap-3 items-center">
                  <img src="./ellipse 175.png" alt="elipse" />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col ">
                      <h1 className="font-bold text-center text-slate-600">
                        Viezh Robert
                      </h1>
                      <p className="text-gray-600 text-normal ">
                        Warsaw, Poland
                      </p>
                    </div>
                    <div className="flex justify-end items-center gap-1">
                      <h1 className="font-bold text-slate-600">4,5</h1>
                      <img src="./Group 1161.png" alt="1161" className="w-full h-full object-contain" />
                    </div>
                  </div>

                </div>
                <div className="mt-4 -mb-16">
                  <p className="text-slate-900 text-base font-normal leading-[30px]">
                    “Wow... I am very happy to use this VPN, <br />
                    it turned out to be more than my expectations <br />
                    and so far there have been no problems. <br />
                    LaslesVPN always the best”.
                  </p>

                </div>

              </div>

            </div>
            <div className="border-2 rounded-md pb-16  hover:border-red-500  duration-500">
              <div className="flex flex-col mx-4 my-4">
                <div className="flex gap-3 items-center">
                  <img src="./ellipse 175.png" alt="elipse" />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col ">
                      <h1 className="font-bold text-center text-slate-600">
                        Viezh Robert
                      </h1>
                      <p className="text-gray-600 text-normal ">
                        Warsaw, Poland
                      </p>
                    </div>
                    <div className="flex justify-end items-center gap-1">
                      <h1 className="font-bold text-slate-600">4,5</h1>
                      <img src="./Group 1161.png" alt="1161" className="w-full h-full object-contain" />
                    </div>
                  </div>

                </div>
                <div className="mt-4 -mb-16">
                  <p className="text-slate-900 text-base font-normal leading-[30px]">
                    “Wow... I am very happy to use this VPN, <br />
                    it turned out to be more than my expectations <br />
                    and so far there have been no problems. <br />
                    LaslesVPN always the best”.
                  </p>

                </div>

              </div>

            </div>
            <div className="border-2 rounded-md pb-16 hover:border-red-500 duration-500">
              <div className="flex flex-col mx-4 my-4">
                <div className="flex gap-3 items-center">
                  <img src="./ellipse 175.png" alt="elipse" />
                  <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col ">
                      <h1 className="font-bold text-center text-slate-600">
                        Viezh Robert
                      </h1>
                      <p className="text-gray-600 text-normal ">
                        Warsaw, Poland
                      </p>
                    </div>
                    <div className="flex justify-end items-center gap-1">
                      <h1 className="font-bold text-slate-600">4,5</h1>
                      <img src="./Group 1161.png" alt="1161" className="w-full h-full object-contain" />
                    </div>
                  </div>

                </div>
                <div className="mt-4 -mb-16">
                  <p className="text-slate-900 text-base font-normal leading-[30px]">
                    “Wow... I am very happy to use this VPN, <br />
                    it turned out to be more than my expectations <br />
                    and so far there have been no problems. <br />
                    LaslesVPN always the best”.
                  </p>

                </div>

              </div>

            </div>

















          </div>
          <div className="flex mt-16 justify-between items-center">


            <div className=" flex gap-3 items-center ">
              <div className=" w-[15px] h-[15px] px-6 rounded-full bg-red-500 " />
              <div className=" w-[15px] h-[15px]  rounded-full bg-gray-200  cursor-pointer" />
              <div className=" w-[15px] h-[15px]  rounded-full bg-gray-200 cursor-pointer " />
              <div className=" w-[15px] h-[15px]  rounded-full bg-gray-200  cursor-pointer" />


            </div>
            <div className="flex gap-4">
              <div className="rounded-full w-[60px] h-[60px] border-2 shadow  border-red-500 cursor-pointer" />
              <div className="rounded-full w-[60px] h-[60px] shadow  bg-red-500 border-2 border-red-500 cursor-pointer" />


            </div>


          </div>


        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default Insights;
