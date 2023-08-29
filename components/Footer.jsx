'use client';

const Footer = () => (
  <footer className="mx-auto px-6 py-6 md:px-16 md:py-16 w-full lg:max-w-[1280px] bg-gradient-to-b from-stone-50 to-stone-50">
    <div className="flex justify-between flex-row max-lg:flex-col   ">
      <div className="flex flex-col  ">
        <img src="./logo (1).png" alt="logo" className="object-contain h-[36px] w-[149px] " />
        <p className="text-gray-600 mt-4">
          <span className="text-slate-900 font-semibold">LaslesVPN </span>is a private virtual network that <br />
          has unique features and has high security.
        </p>
        <div className="flex -gap-2 mt-6 items-center">

          <img src="./Facebook.png" alt="facebook" className="object-contain" />
          <img src="./Twitter.png" alt="Twitter" className="object-contain" />
          <img src="./Instagram.png" alt="Instagram" className="object-contain" />



        </div>
        <p className="text-lg text-gray-500 mt-2">
          ©2020Lasles <span className="font-bold text-gray-700">VPN</span>

        </p>

      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">

      
      <div className="flex flex-col gap-3">
        <p className="font-bold text-lg text-slate-800 mb-2">
          Product
        </p>
        <p className="text-gray-500 cursor-pointer">
          Princing
        </p>
        <p className="text-gray-500 cursor-pointer">
          Locations
        </p>

        <p className="text-gray-500 cursor-pointer">
          Download
        </p>

        <p className="text-gray-500 cursor-pointer">
          Server
        </p>

        <p className="text-gray-500 cursor-pointer">
          Countries
        </p>

        <p className="text-gray-500 cursor-pointer">
          Blog
        </p>


      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-lg text-slate-800 mb-2">
          Engage
        </p>
        <p className="text-gray-500 cursor-pointer">
          LaslesVPN ?
        </p>
        <p className="text-gray-500 cursor-pointer">
          FAQ
        </p>

        <p className="text-gray-500 cursor-pointer">
          Tutorials
        </p>

        <p className="text-gray-500 cursor-pointer">
          About Us
        </p>

        <p className="text-gray-500 cursor-pointer">
          Privacy Policy
        </p>

        <p className="text-gray-500 cursor-pointer">
          Terms of Service
        </p>


      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold text-lg text-slate-800 mb-2">
          Earn Money
        </p>

        <p className="text-gray-500 cursor-pointer">
          Affiliate
        </p>

        <p className="text-gray-500 cursor-pointer">
          Become Partner
        </p>


      </div>
      <div>

      </div>
      </div>
    </div>
  </footer>
);

export default Footer;
