'use client';

const Feedback = () => (
  <section className="mx-auto w-full  lg:max-w-[1280px]   px-6 py-6 md:py-16 md:px-16">
    <div className="rounded-[10px] px-12 py-12 shadow-2xl max-lg:px-6">
      <div className="flex justify-between items-center">
        <div>
        <h1 className="font-bold text-[32px] text-slate-900 ">
        Subscribe Now for <br />
        Get Special Features!
        </h1>
        <p className="text-gray-600 mt-4">Let's subscribe with us and find the fun.</p>
        </div>
        <button className="transition ease-in-out delay-150 rounded-[10px] hover:-translate-y-1 hover:scale-110 duration-300 bg-red-500 shadow-2xl shadow-red-500 text-white font-bold px-16 py-6 ">Subscribe Now</button>
      </div>

    </div>
  </section>
);

export default Feedback;
