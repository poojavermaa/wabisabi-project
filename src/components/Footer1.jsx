import React from "react";

const Footer1 = () => {
  return (
    <>
      <div className="bg-[#e1ccb4] h-auto px-8 md:px-16 lg:px-32 py-12">
        <div className="pb-8">
          <h1 className="text-2xl md:text-3xl text-center md:text-left">BREATHE EASY</h1>
        </div>
        <div className="pb-7 w-full md:w-[38rem] mx-auto md:mx-0">
          <p className="text-center md:text-left">
            The countryside location of our studio has been designed with
            natural ventilation in mind, with large windows and doors that allow
            the breeze to flow through.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="mb-6 md:mb-0">
            <p className="w-full md:w-[24rem] text-center md:text-left">
              The design prioritizes open spaces where people can move around
              and socialize freely without feeling confined. The pockets of
              privacy and community provide a sense of security and belonging.
            </p>
          </div>
          <div className="mb-6 md:mb-0">
            <p className="w-full md:w-[24rem] text-center md:text-left">
              The studio embraces industrial style and leaves essential elements
              and services exposed, albeit neatly arranged, providing easy
              access for maintenance.
            </p>
          </div>
          <div>
            <p className="text-center md:text-left">
              The studio is designed to be healthy, comfortable, and welcoming.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer1;
