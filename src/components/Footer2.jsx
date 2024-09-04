import React from "react";

const Footer2 = () => {
  return (
    <>
      <div className="bg-[#404040] h-auto flex flex-col md:flex-row md:h-44 px-8 md:px-32 py-10">
        <div className="w-full md:w-[38rem] mb-6 md:mb-0">
          <p className="text-white text-center text-lg opacity-70 md:text-left lg:w-[38rem]">
            Over the years, working with Nature has helped us realize 'less is
            more and usually more effective'. We intend to continue working hard
            to make simple systems more sophisticated.
          </p>
        </div>
        <div className="w-full md:w-[24rem] mb-6 md:mb-0 flex justify-center md:justify-start">
          <div className="text-center md:text-left md:pl-16 w-[20rem]">
            <p className="text-white font-bold cursor-pointer hover:text-gray-300">PROJECTS</p>
            <p className="text-white cursor-pointer hover:text-gray-300">Jajam</p>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-start">
          <div className="text-center md:text-left">
            <p className="text-white font-bold">PLATFORM</p>
            <p className="text-white cursor-pointer hover:text-gray-300">WorkShops</p>
            <p className="text-white cursor-pointer hover:text-gray-300">Collections</p>
            <p className="text-white cursor-pointer hover:text-gray-300">Notes</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;
