'use client';


const About = () => (
  <section className="sm:px-16 sm:py-16 px-6 py-6  max-lg:hidden w-[1280px] mx-auto ">
    
    <div className="border rounded-[10px] py-8  border-white shadow-2xl shadow-slate-200 relative ">
      <div className="flex items-center justify-around gap-4">
        <div className="flex items-center gap-12">
          <img src="./user.png" alt="user" className="w-[55px] h-55[px]" />

          <div className="flex flex-col leading-3 mr-[68px]">
            <span className="font-bold text-slate-900 text-[25px] leading-[30px]">90+</span>
            <span className="font-medium text-slate-600 text-xl  leading-[30px]">
              Users
            </span>

          </div>
          <div className=" border-l border-slate-200  mr-12">
            <div className=" ml-8 flex items-center gap-12">
              <img src="./user.png" alt="user" className="w-[55px] h-55[px]" />

              <div className="flex flex-col leading-3 mr-12 ">
                <span className="font-bold text-slate-900 text-[25px]  leading-[30px]">30+</span>
                <span className="font-medium text-slate-600 text-xl  leading-[30px]">
                  Locations
                </span>
              </div>
            </div>

          </div>

            
          <div className=" border-l border-slate-200 ">
            <div className=" flex items-center ml-12 justify-center gap-12">
              <img src="./user.png" alt="user" className="w-[55px] h-55[px]" />

              <div className="flex flex-col leading-3">
                <span className="font-bold text-slate-900 text-[25px]  leading-[30px]">50+</span>
                <span className="font-medium text-slate-600 text-xl  leading-[30px]">
                  Servers
                </span>
              </div>
            </div>

          </div>







        </div>



      </div>

    </div>
  </section>
);

export default About;
